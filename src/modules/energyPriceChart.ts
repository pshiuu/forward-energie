import { onReady } from "@xatom/core";
import Chart, { ChartConfiguration, FontSpec } from "chart.js/auto"; // Import ChartConfiguration and FontSpec

// Store chart instance globally
let priceChart: Chart | null = null;
// Store the currently selected date, always in German time (CET/CEST)
let currentSelectedDate: Date = convertToGermanTime(new Date());
// Prevent redundant Wized updates
let lastWizedUpdateSignature: string | null = null;

// Add Chart.js type to window object
declare global {
  interface Window {
    Chart: any; // Using 'any' as a simple solution, could be replaced with proper Chart.js types
  }
}

// Add Wized type definition
declare global {
  interface Window {
    Wized: any;
  }
}

// Helper function to convert any date to German time (CET/CEST)
function convertToGermanTime(date: Date): Date {
  // Get the current time difference between local time and UTC
  const localOffset = date.getTimezoneOffset();

  // Create a date object for the same timestamp, but interpreted as if in Berlin timezone
  const tempDate = new Date(date.getTime());

  // Calculate UTC date (as epoch)
  const utcTime = tempDate.getTime() + localOffset * 60 * 1000;

  // European times: UTC+1 (winter/CET) or UTC+2 (summer/CEST)
  // We can determine this with Intl.DateTimeFormat to get precise DST transitions
  const berlinTimeStr = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Berlin",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).format(date);

  // Parse this properly formatted string into a Date
  const [datePart, timePart] = berlinTimeStr.split(", ");
  const [day, month, year] = datePart.split("/").map(Number);
  const [hour, minute, second] = timePart.split(":").map(Number);

  const germanDate = new Date(
    Date.UTC(year, month - 1, day, hour, minute, second)
  );
  return germanDate;
}

// Helper function to get "today" in German time
function getGermanToday(): Date {
  // Get the current date in German timezone
  const berlinTimeStr = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Berlin",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(new Date());

  // Parse this properly formatted string
  const [day, month, year] = berlinTimeStr.split("/").map(Number);

  // Create midnight in German time - explicitly as midnight
  const germanToday = new Date(Date.UTC(year, month - 1, day, 0, 0, 0));

  console.log("German today raw:", berlinTimeStr);
  console.log("Parsed as midnight German time:", germanToday.toISOString());

  return germanToday;
}

export function initEnergyPriceChart() {
  onReady(() => {
    injectStyles();
    setupDateNavigation(); // Setup UI first

    if (window.Wized) {
      setupWizedIntegration();
    } else {
      initChart();
      updateDateDisplay(currentSelectedDate);
      handleNoDataForDate(); // Show no data message
    }
  });
}

// Setup Wized Integration
function setupWizedIntegration() {
  window.Wized = window.Wized || [];
  window.Wized.push((Wized: any) => {
    // Initialize chart structure and basic UI first - do this immediately for perceived performance
    console.time("chartInitialization");
    initChart();
    console.timeEnd("chartInitialization");

    // Log timezone information for debugging
    console.log(
      "Browser timezone:",
      Intl.DateTimeFormat().resolvedOptions().timeZone
    );
    console.log("Browser local time:", new Date().toISOString());

    // Get current German time and use it for initial display
    currentSelectedDate = getGermanToday(); // Use getGermanToday for consistency
    console.log(
      "Current selected date (German midnight):",
      currentSelectedDate.toISOString()
    );

    updateDateDisplay(currentSelectedDate); // Displays today in German time
    updateNextButtonState();

    console.log("Forcing initial load for the current day (German time).");

    // 1. Calculate today's date range in German time
    const today = getGermanToday();
    console.log("German today (midnight):", today.toISOString());

    // Start date is today at 00:00 German time (should already be this way)
    const initialStartDate = new Date(today);
    // End date is today at 23:59 German time
    const initialEndDate = new Date(today);
    initialEndDate.setUTCHours(23, 59, 59);

    console.log(
      "Start date (German midnight):",
      initialStartDate.toISOString()
    );
    console.log("End date (German 23:59:59):", initialEndDate.toISOString());

    const initialPeriodStart = formatDateToENTSOE(initialStartDate);
    const initialPeriodEnd = formatDateToENTSOE(initialEndDate);

    console.log(
      "API request period:",
      initialPeriodStart,
      "to",
      initialPeriodEnd
    );

    // 2. Show loading state before starting any requests
    showLoadingState();

    // Track request attempts for retry logic
    let requestAttempts = 0;
    const maxRetries = 3;
    let loadingTimeout: any;

    // CRITICAL FIX: Setup the watcher FIRST, before making any requests
    if (Wized.reactivity && Wized.reactivity.watch) {
      Wized.reactivity.watch(
        () => Wized.data?.r?.XLMtoJSON?.data,
        (newData: any, oldData: any) => {
          console.log("Wized data watcher triggered.");
          clearTimeout(loadingTimeout); // Clear timeout when watcher triggers

          if (!newData) {
            console.log(
              "Watcher received null/undefined data, waiting before showing error..."
            );
            // Add delay to prevent race conditions - only show error if still no data after delay
            setTimeout(() => {
              if (!Wized.data?.r?.XLMtoJSON?.data) {
                console.log("Still no data after delay, showing error");
                handleNoDataForDate();
              } else {
                console.log("Data appeared after delay, continuing");
              }
            }, 2000); // Wait 2 seconds
            return;
          }

          console.time("chartDataProcessing");
          if (isValidChartData(newData) && !isDataUnchanged(newData, oldData)) {
            console.log(
              "Watcher received valid & changed data, updating chart."
            );
            updateChartWithWizedData(newData);
          } else if (!isValidChartData(newData)) {
            console.log("Watcher received invalid data structure.");
            handleNoDataForDate();
          } else {
            console.log(
              "Wized data watcher: Data is valid but unchanged, hiding loading."
            );
            // Ensure loading is hidden if data comes back but is the same
            hideLoadingState();
          }
          console.timeEnd("chartDataProcessing");
        },
        { deep: true }
      );
      console.log("Wized data watcher setup complete");
    } else {
      console.warn("Wized reactivity watcher not available.");
    }

    // Function to set timeout with retry capability
    function setLoadingTimeout() {
      loadingTimeout = setTimeout(() => {
        if (document.body.classList.contains("chart-loading")) {
          console.warn(
            `API request timeout after 30 seconds (attempt ${requestAttempts})`
          );
          if (requestAttempts < maxRetries) {
            console.log(
              `Retrying API request (attempt ${
                requestAttempts + 1
              }/${maxRetries})`
            );
            executeDataRequest();
          } else {
            console.error("Max retries reached, showing fallback");
            hideLoadingState();
            handleNoDataForDate();
          }
        }
      }, 30000);
    }

    // Function to execute the data request with retry logic
    function executeDataRequest() {
      requestAttempts++;
      console.log(`Executing data request (attempt ${requestAttempts})`);

      // Clear any existing timeout
      clearTimeout(loadingTimeout);
      setLoadingTimeout();

      // Update Wized variables for this attempt
      const variablesUpdated = updateWizedVariables(
        initialPeriodStart,
        initialPeriodEnd,
        Wized
      );

      if (!variablesUpdated) {
        console.error("Failed to update Wized variables");
        if (requestAttempts < maxRetries) {
          setTimeout(() => executeDataRequest(), 1000); // Retry after 1 second
        } else {
          clearTimeout(loadingTimeout);
          hideLoadingState();
          handleNoDataForDate();
        }
        return;
      }

      // Execute the API request
      if (Wized.requests?.execute) {
        console.log("Executing XLMtoJSON request for today's data.");
        console.time("apiRequestTime");
        Wized.requests
          .execute("XLMtoJSON")
          .then(() => {
            console.timeEnd("apiRequestTime");
            console.log("XLMtoJSON request completed successfully");
            clearTimeout(loadingTimeout);
            // Note: Chart update will be handled by the watcher
          })
          .catch((error: any) => {
            console.timeEnd("apiRequestTime");
            console.error("Error executing XLMtoJSON request:", error);
            clearTimeout(loadingTimeout);

            if (requestAttempts < maxRetries) {
              console.log(
                `Retrying after error (attempt ${
                  requestAttempts + 1
                }/${maxRetries})`
              );
              setTimeout(() => executeDataRequest(), 2000); // Retry after 2 seconds
            } else {
              console.error("Max retries reached after API error");
              handleNoDataForDate();
            }
          });
      } else {
        console.error("Wized.requests.execute not available!");
        if (requestAttempts < maxRetries) {
          setTimeout(() => executeDataRequest(), 1000); // Retry after 1 second
        } else {
          clearTimeout(loadingTimeout);
          hideLoadingState();
          handleNoDataForDate();
        }
      }
    }

    // 3. Check if data already exists before making a request
    const existingData = Wized.data?.r?.XLMtoJSON?.data;
    if (existingData && isValidChartData(existingData)) {
      console.log("Found existing valid data, using it instead of new request");
      updateChartWithWizedData(existingData);
      return;
    }

    // 4. Start the initial data request with retry capability
    executeDataRequest();
  });
}

// Setup Date Navigation UI
function setupDateNavigation() {
  const chartWrapper = document.querySelector(".chart-wrapper");
  const chartTitle = chartWrapper?.querySelector(".chart-title-container"); // Assuming a title container exists or can be added
  if (!chartWrapper) return;

  // Create date navigation container
  const dateNavContainer = document.createElement("div");
  dateNavContainer.className = "date-nav-container";

  const prevButton = document.createElement("button");
  prevButton.innerHTML = "‹";
  prevButton.className = "date-nav-button date-nav-prev";
  prevButton.setAttribute("aria-label", "Vorheriger Tag");
  prevButton.setAttribute("id", "prevDayButton");
  prevButton.type = "button"; // Explicitly set button type

  // Create date display container that will contain the date display and the date picker
  const dateDisplayContainer = document.createElement("div");
  dateDisplayContainer.className = "date-display-container";

  // Create date display that will act as a button to open the date picker
  const dateDisplay = document.createElement("div");
  dateDisplay.id = "dateDisplay";
  dateDisplay.className = "date-display date-picker-trigger";
  dateDisplay.setAttribute("role", "button");
  dateDisplay.setAttribute("tabindex", "0");
  dateDisplay.setAttribute("aria-label", "Datum auswählen");
  // Add calendar icon to indicate it's clickable
  dateDisplay.innerHTML =
    '<span id="dateDisplayText"></span><span class="calendar-icon"></span>';

  // Create hidden date input that will serve as our calendar
  const datePickerInput = document.createElement("input");
  datePickerInput.type = "date";
  datePickerInput.id = "datePickerInput";
  datePickerInput.className = "date-picker-input";

  // Set max date to today (in German time) to prevent selecting future dates
  const today = getGermanToday();
  const year = today.getUTCFullYear();
  const month = String(today.getUTCMonth() + 1).padStart(2, "0");
  const day = String(today.getUTCDate()).padStart(2, "0");
  datePickerInput.max = `${year}-${month}-${day}`;

  // Position it absolutely but make it accessible for click/focus events
  datePickerInput.style.position = "absolute";
  datePickerInput.style.opacity = "0";
  datePickerInput.style.height = "1px";
  datePickerInput.style.width = "1px";
  datePickerInput.style.zIndex = "-1";
  // Prevent iOS zoom on focus
  datePickerInput.style.fontSize = "16px";

  // Add date display and picker to container
  dateDisplayContainer.appendChild(dateDisplay);
  dateDisplayContainer.appendChild(datePickerInput);

  const nextButton = document.createElement("button");
  nextButton.innerHTML = "›";
  nextButton.className = "date-nav-button date-nav-next";
  nextButton.setAttribute("aria-label", "Nächster Tag");
  nextButton.setAttribute("id", "nextDayButton");
  nextButton.type = "button"; // Explicitly set button type

  dateNavContainer.appendChild(prevButton);
  dateNavContainer.appendChild(dateDisplayContainer);
  dateNavContainer.appendChild(nextButton);

  // Insert date navigation - ideally next to the title if structure allows
  // Or insert it before the chart container as fallback
  if (chartTitle) {
    chartTitle.appendChild(dateNavContainer);
  } else {
    const chartContainer = chartWrapper.querySelector(".chart-container");
    if (chartContainer) {
      chartWrapper.insertBefore(dateNavContainer, chartContainer);
    } else {
      chartWrapper.prepend(dateNavContainer);
    }
  }

  // Event listeners with improved handling and stopping propagation
  prevButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop event from bubbling
    console.log("Previous day button clicked");
    if (!prevButton.disabled) {
      navigateDays(-1);
    } else {
      console.log("Previous button is disabled, ignoring click");
    }
  });

  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop event from bubbling
    console.log("Next day button clicked");
    if (!nextButton.disabled && nextButton.style.display !== "none") {
      navigateDays(1);
    } else {
      console.log("Next button is disabled or hidden, ignoring click");
    }
  });

  // Make the date display clickable to open the date picker
  dateDisplay.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop event from bubbling
    console.log("Date display clicked");
    openDatePicker();
  });

  dateDisplay.addEventListener("touchend", (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop event from bubbling
    console.log("Date display touched");
    openDatePicker();
  });

  dateDisplay.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.stopPropagation(); // Stop event from bubbling
      console.log("Date display keydown");
      openDatePicker();
    }
  });

  // Handle date selection from the picker
  datePickerInput.addEventListener("change", handleDatePickerChange);

  updateDateDisplay(currentSelectedDate);
  updateNextButtonState();
}

// Open the date picker when clicking on date display
function openDatePicker() {
  console.log("Opening date picker...");
  const datePickerInput = document.getElementById(
    "datePickerInput"
  ) as HTMLInputElement;

  if (!datePickerInput) {
    console.error("Date picker input element not found!");
    return;
  }

  // Format date as YYYY-MM-DD from UTC components to avoid timezone issues
  const year = currentSelectedDate.getUTCFullYear();
  const month = String(currentSelectedDate.getUTCMonth() + 1).padStart(2, "0");
  const day = String(currentSelectedDate.getUTCDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  console.log(
    "Setting date picker to:",
    formattedDate,
    "from",
    currentSelectedDate.toISOString()
  );
  datePickerInput.value = formattedDate;

  // Add overlay to capture clicks outside the picker
  let overlay = document.querySelector(".date-picker-overlay") as HTMLElement;
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "date-picker-overlay";
    document.body.appendChild(overlay);

    // Close the picker when clicking outside
    overlay.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeDatePicker();
    });
  }

  // Show the date picker with proper positioning
  datePickerInput.classList.add("visible");
  overlay.classList.add("visible");

  // Slight delay to ensure DOM updates before focus/click
  setTimeout(() => {
    console.log("Focusing and clicking date input...");
    datePickerInput.focus();
    // Use direct .showPicker() method if available
    if (typeof datePickerInput.showPicker === "function") {
      try {
        datePickerInput.showPicker();
        console.log("Used showPicker() method");
      } catch (e) {
        console.log("showPicker() failed, falling back to click:", e);
        datePickerInput.click();
      }
    } else {
      datePickerInput.click();
      console.log("Used click() method (showPicker not available)");
    }
  }, 50);
}

// Close the date picker
function closeDatePicker() {
  const datePickerInput = document.getElementById(
    "datePickerInput"
  ) as HTMLInputElement;
  const overlay = document.querySelector(".date-picker-overlay") as HTMLElement;

  if (datePickerInput) {
    datePickerInput.classList.remove("visible");
  }

  if (overlay) {
    overlay.classList.remove("visible");
  }

  console.log("Date picker closed");
}

// Handle date selection from the date picker
function handleDatePickerChange(event: Event) {
  const datePickerInput = event.target as HTMLInputElement;
  if (!datePickerInput.value) return;

  console.log("Date picker value:", datePickerInput.value);

  // Parse the date parts from the YYYY-MM-DD value
  const [year, month, day] = datePickerInput.value.split("-").map(Number);

  // Create midnight on that date in German timezone
  const selectedDate = new Date(Date.UTC(year, month - 1, day, 0, 0, 0));

  console.log(
    "Date picker selected date (German midnight):",
    selectedDate.toISOString()
  );

  // Ensure date is valid and not in the future (in German time)
  const today = getGermanToday();

  if (selectedDate.getTime() > today.getTime()) {
    console.log("Cannot select future date");
    closeDatePicker();
    return;
  }

  // Close the date picker
  closeDatePicker();

  // Update selected date and refresh the chart
  currentSelectedDate = selectedDate;
  showLoadingState();

  if (window.Wized) {
    window.Wized.push((Wized: any) => {
      handleDateChange(currentSelectedDate, Wized);
    });
  } else {
    updateDateDisplay(currentSelectedDate);
    console.log("Wized not found, cannot trigger data refresh.");
    handleNoDataForDate();
  }

  updateNextButtonState();
}

// Navigate between days
function navigateDays(days: number) {
  console.log(
    `Navigating ${days > 0 ? "forward" : "backward"} by ${Math.abs(
      days
    )} day(s)`
  );

  // Create a new date based on the current selected date
  const newDate = new Date(currentSelectedDate);
  // Add days using UTC to maintain time consistency
  newDate.setUTCDate(currentSelectedDate.getUTCDate() + days);

  const today = getGermanToday();
  const tomorrow = new Date(today);
  tomorrow.setUTCDate(today.getUTCDate() + 1);

  // Use German time for all logging to help with debugging
  console.log(
    "Navigation - Current date:",
    formatDate(currentSelectedDate),
    currentSelectedDate.toISOString()
  );
  console.log(
    "Navigation - New date:",
    formatDate(newDate),
    newDate.toISOString()
  );
  console.log(
    "Navigation - Today (German):",
    formatDate(today),
    today.toISOString()
  );
  console.log(
    "Navigation - Tomorrow (German):",
    formatDate(tomorrow),
    tomorrow.toISOString()
  );

  if (newDate >= tomorrow) {
    // Use >= to prevent navigating *to* tomorrow
    console.log("Cannot navigate to tomorrow or later.");
    return;
  }

  currentSelectedDate = new Date(newDate);
  showLoadingState(); // Show loading indicator immediately
  updateNextButtonState(); // Update button state immediately (will be disabled due to loading)

  if (window.Wized) {
    window.Wized.push((Wized: any) => {
      // Pass Wized object - this now primarily sets variables
      // and triggers the request if variables were changed.
      handleDateChange(currentSelectedDate, Wized);
    });
  } else {
    updateDateDisplay(currentSelectedDate);
    console.log("Wized not found, cannot trigger data refresh.");
    handleNoDataForDate(); // Clear chart if no Wized (will hide loading)
  }
}

// Update next button state (hidden if date is today, disabled if loading)
function updateNextButtonState() {
  const nextButton = document.querySelector(
    "#nextDayButton"
  ) as HTMLButtonElement;
  const prevButton = document.querySelector(
    "#prevDayButton"
  ) as HTMLButtonElement;

  if (!nextButton || !prevButton) {
    console.warn("Navigation buttons not found for state update");
    return;
  }

  const today = getGermanToday();
  const selectedDay = new Date(currentSelectedDate);

  // Compare dates using time strings to avoid timezone issues
  const isToday =
    selectedDay.toISOString().substring(0, 10) ===
    today.toISOString().substring(0, 10);
  const isLoading = document.body.classList.contains("chart-loading");

  console.log("Updating button states:", {
    isToday,
    isLoading,
    selectedDate: formatDate(selectedDay),
    today: formatDate(today),
  });

  // Next button: hide on today, disable when loading
  if (isToday) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "inline-flex";
    nextButton.disabled = isLoading;
    nextButton.classList.toggle("disabled", isLoading);
  }

  // Previous button: always visible, but disabled when loading
  prevButton.disabled = isLoading;
  prevButton.classList.toggle("disabled", isLoading);

  // For reference - log the button states
  console.log("Button states:", {
    nextButtonVisible: nextButton.style.display !== "none",
    nextButtonEnabled: !nextButton.disabled,
    prevButtonEnabled: !prevButton.disabled,
  });
}

// Handle date change: update display, Wized vars, and trigger API request
function handleDateChange(newDate: Date, Wized: any) {
  console.log("handleDateChange called with date:", formatDate(newDate));

  // Accept Wized object
  currentSelectedDate = newDate;
  updateDateDisplay(currentSelectedDate);

  // For API requests, we need:
  // 1. Start: the selected date at 00:00 German time
  // 2. End: the same day at 23:59:59 German time

  // Start date should already be at midnight
  const startDate = new Date(newDate);

  // End date is the same day at 23:59:59
  const endDate = new Date(newDate);
  endDate.setUTCHours(23, 59, 59);

  console.log("Date change - start date:", startDate.toISOString());
  console.log("Date change - end date:", endDate.toISOString());

  const periodStart = formatDateToENTSOE(startDate);
  const periodEnd = formatDateToENTSOE(endDate);

  console.log(`Request period: ${periodStart} to ${periodEnd}`);
  // Log the Wized requests API availability
  console.log("Wized requests API available:", !!Wized?.requests?.execute);

  // Set a timeout for the API request to prevent hanging
  const requestTimeout = setTimeout(() => {
    if (document.body.classList.contains("chart-loading")) {
      console.warn("Request timeout after 30 seconds - showing fallback");
      hideLoadingState();
      handleNoDataForDate();
    }
  }, 30000);

  // Pass Wized object to updateWizedVariables
  const variablesChanged = updateWizedVariables(periodStart, periodEnd, Wized);

  // Only execute the request if the variables actually changed.
  if (variablesChanged) {
    if (Wized.requests?.execute) {
      console.log(
        `Variables changed, executing XLMtoJSON request for date: ${formatDate(
          newDate
        )}`
      );
      console.time("dateChangeApiRequest");
      Wized.requests
        .execute("XLMtoJSON")
        .then(() => {
          console.timeEnd("dateChangeApiRequest");
          console.log("XLMtoJSON request completed successfully");
          clearTimeout(requestTimeout);
        })
        .catch((error: any) => {
          console.timeEnd("dateChangeApiRequest");
          console.error("Error executing XLMtoJSON request:", error);
          // Handle error: Clear chart, show message, hide loading
          clearTimeout(requestTimeout);
          handleNoDataForDate();
        });
      // Loading state will be hidden by the watcher when data arrives or if request fails
      return; // We've triggered a request, so we can return
    } else {
      // Variables changed but we can't execute the request
      console.error(
        "Variables changed, but Wized.requests.execute not available! Relying on reactivity."
      );
      // Set a safety timeout to hide loading if the watcher doesn't trigger
      clearTimeout(requestTimeout);
      setTimeout(() => {
        if (document.body.classList.contains("chart-loading")) {
          console.warn(
            "Safety timeout - hiding loading state after 10s inactivity"
          );
          hideLoadingState();
          handleNoDataForDate();
        }
      }, 10000);
    }
  } else {
    // If variable update was skipped (variables were already correct)
    console.log(
      "Variable update skipped (already correct), hiding loading state."
    );
    clearTimeout(requestTimeout);
    hideLoadingState(); // Hide loading immediately
  }
}

// Update the date display UI element
function updateDateDisplay(date: Date) {
  const dateDisplayElement = document.getElementById("dateDisplay");
  const dateDisplayText = document.getElementById("dateDisplayText");

  if (dateDisplayElement && !dateDisplayText) {
    // Handle legacy case - make it compatible with older structure
    console.log("Updating date display (legacy mode)");
    dateDisplayElement.textContent = formatDate(date);
    return;
  }

  if (dateDisplayText) {
    console.log("Updating date display:", formatDate(date));
    dateDisplayText.textContent = formatDate(date);
  } else {
    console.warn("Date display element not found for update");
  }
}

// Format date for ENTSO-E API (YYYYMMDDHHMM)
function formatDateToENTSOE(date: Date): string {
  // The date we receive should already be in the correct timezone
  // Format with proper hours and minutes
  const formatted =
    date.getUTCFullYear() +
    String(date.getUTCMonth() + 1).padStart(2, "0") +
    String(date.getUTCDate()).padStart(2, "0") +
    String(date.getUTCHours()).padStart(2, "0") +
    String(date.getUTCMinutes()).padStart(2, "0");

  console.log(
    `Formatting ${date.toISOString()} to ENTSO-E format: ${formatted}`
  );
  return formatted;
}

// Update Wized variables - Accepts Wized object
function updateWizedVariables(
  startValue: string,
  endValue: string,
  Wized: any
): boolean {
  // Accept Wized object

  // Log Wized object structure for debugging
  console.log("Wized object in updateWizedVariables:", {
    hasData: !!Wized?.data,
    hasVariables: !!Wized?.data?.variables,
    hasSet: !!Wized?.data?.variables?.set,
    hasDataV: !!Wized?.data?.v,
    currentStart: Wized?.data?.v?.periodeStart,
    currentEnd: Wized?.data?.v?.periodeEnd,
  });

  // Direct fallback approach - try to set variables directly if API isn't available
  const useDirectSet = !Wized?.data?.variables?.set;

  // Get current values for comparison
  const currentStart = Wized?.data?.v?.periodeStart;
  const currentEnd = Wized?.data?.v?.periodeEnd;

  const signature = `${startValue}|${endValue}`;
  // Only prevent update if signature AND current Wized values match
  if (
    currentStart === startValue &&
    currentEnd === endValue &&
    lastWizedUpdateSignature === signature
  ) {
    console.log("Wized vars unchanged, skipping update.");
    return false; // Indicate update was skipped
  }

  console.log(
    `Updating Wized variables: start=${startValue}, end=${endValue} (using ${
      useDirectSet ? "direct assignment" : "API"
    })`
  );
  lastWizedUpdateSignature = signature; // Store signature before update

  try {
    if (useDirectSet) {
      // FALLBACK: Direct assignment if variables API not available
      console.log("Using direct variable assignment as fallback");
      if (Wized?.data?.v) {
        Wized.data.v.periodeStart = startValue;
        Wized.data.v.periodeEnd = endValue;
        console.log("Direct variable assignment complete");
        return true;
      } else {
        console.error(
          "Cannot use direct assignment, Wized.data.v not available"
        );
        return false;
      }
    } else {
      // Use the passed Wized object's variable API
      const wizedVariables = Wized.data.variables;
      if (wizedVariables.batch) {
        wizedVariables.batch(() => {
          wizedVariables.set("periodeStart", startValue);
          wizedVariables.set("periodeEnd", endValue);
        });
      } else {
        wizedVariables.set("periodeStart", startValue);
        wizedVariables.set("periodeEnd", endValue);
      }
      console.log("Wized variables updated via API");
      return true; // Indicate update was triggered
    }
  } catch (error) {
    console.error("Error updating Wized variables:", error);

    // Last-resort fallback: try direct assignment even if API was preferred
    if (!useDirectSet && Wized?.data?.v) {
      try {
        console.log("API failed, trying direct assignment as last resort");
        Wized.data.v.periodeStart = startValue;
        Wized.data.v.periodeEnd = endValue;
        console.log("Last-resort direct assignment succeeded");
        return true;
      } catch (fallbackError) {
        console.error(
          "Last-resort direct assignment also failed:",
          fallbackError
        );
      }
    }

    lastWizedUpdateSignature = null; // Reset signature on error
    return false; // Indicate update failed
  }
}

// Check if data is valid
function isValidChartData(data: any): boolean {
  try {
    // More resilient validation - check the essential path exists
    return !!(data?.timeSeries?.[0]?.periods?.[0]?.points?.length > 0);
  } catch (error) {
    console.warn("Data validation error:", error, data);
    return false;
  }
}

// Check if new data is different from the last processed data
let lastProcessedDataSignature: string | null = null;
function isDataUnchanged(newData: any, oldData: any): boolean {
  if (!isValidChartData(newData)) {
    // If new data is invalid, consider it changed only if the last signature was valid
    const changed = lastProcessedDataSignature !== null;
    lastProcessedDataSignature = null; // Reset signature as current data is invalid
    return !changed; // Return true (unchanged) only if last was also invalid/null
  }
  try {
    const startTime = newData.timeSeries[0].periods[0].timeInterval.start;
    const pointsSignature = JSON.stringify(
      newData.timeSeries[0].periods[0].points.map((p: any) => ({
        p: p.position,
        pr: p.price,
      }))
    );
    const newSignature = `${startTime}|${pointsSignature}`;
    if (newSignature === lastProcessedDataSignature) {
      console.log("Data signature match, data unchanged.");
      return true;
    }
    console.log("Data signature mismatch, data changed.");
    lastProcessedDataSignature = newSignature;
    return false;
  } catch (error) {
    console.warn("Error creating data signature:", error);
    lastProcessedDataSignature = null;
    return false; // Assume changed on error
  }
}

// Format time from point position
function formatTimeFromPosition(position: number): string {
  const hour = position - 1;
  // Ensure hour is within 0-23 range
  if (hour < 0 || hour > 23) {
    console.warn("Invalid position received:", position);
    return "--:--";
  }
  return hour.toString().padStart(2, "0") + ":00";
}

// Format date for display (DD.MM.YYYY)
function formatDate(date: Date): string {
  if (!(date instanceof Date) || isNaN(date.getTime())) return "--.--.----";

  // Always create a new Intl.DateTimeFormat instance that's guaranteed to use German formatting
  // This ensures consistent display regardless of user's locale settings
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Europe/Berlin", // Explicitly set timezone to Berlin (German time)
  }).format(date);
}

// Convert MWh price (EUR) to Cents/kWh
function convertMWhToCentsPerKWh(mwhPrice: number): number {
  const price = Number(mwhPrice);
  return isNaN(price) ? 0 : price / 10;
}

// Update chart with new data
function updateChartWithWizedData(data: any) {
  // Check if data is valid *before* hiding loading, in case we need to show "no data"
  if (!isValidChartData(data)) {
    console.error("CRITICAL: Invalid data for chart update");
    console.error("Data structure:", {
      hasData: !!data,
      hasTimeSeries: !!data?.timeSeries,
      timeSeriesLength: data?.timeSeries?.length,
      hasPeriods: !!data?.timeSeries?.[0]?.periods,
      periodsLength: data?.timeSeries?.[0]?.periods?.length,
      hasPoints: !!data?.timeSeries?.[0]?.periods?.[0]?.points,
      pointsLength: data?.timeSeries?.[0]?.periods?.[0]?.points?.length,
    });
    console.error("Full data object:", data);
    handleNoDataForDate(); // This will call hideLoadingState
    return;
  }
  // Only hide loading *after* processing valid data
  hideLoadingState(); // Hide loading indicator now that we have valid data to process

  if (!priceChart) {
    // Should not happen if initChart worked, but good practice
    console.error("Price chart instance not available for update.");
    return;
  }

  console.log("Updating chart with Wized data...");
  try {
    console.time("chartDataPrep");
    const period = data.timeSeries[0].periods[0];
    const points = period.points;

    // Ensure points is an array and has length
    if (!Array.isArray(points) || points.length === 0) {
      console.error("CRITICAL: No points data found in the period");
      console.error("Points type:", typeof points);
      console.error("Points value:", points);
      console.error("Period structure:", period);
      handleNoDataForDate(); // This will call hideLoadingState (redundant, but safe)
      return;
    }

    // Pre-allocate arrays for performance
    const labels = new Array(points.length);
    const pricesInCentsPerKWh = new Array(points.length);

    // Process all points in one loop for better performance
    let minPrice = Infinity;
    let maxPrice = -Infinity;
    let minPriceIndex = -1;
    let maxPriceIndex = -1;
    let totalPrice = 0;
    let validPriceCount = 0;

    // Single pass through data for better performance
    for (let i = 0; i < points.length; i++) {
      labels[i] = (points[i].position - 1).toString(); // 0-23
      const price = convertMWhToCentsPerKWh(points[i].price);
      pricesInCentsPerKWh[i] = price;

      if (!isNaN(price)) {
        if (price < minPrice) {
          minPrice = price;
          minPriceIndex = i;
        }
        if (price > maxPrice) {
          maxPrice = price;
          maxPriceIndex = i;
        }
        totalPrice += price;
        validPriceCount++;
      }
    }

    // Check if prices array is valid after processing
    if (validPriceCount === 0) {
      console.error(
        "CRITICAL: Processed prices resulted in empty or invalid array"
      );
      console.error("Points data sample:", points.slice(0, 3));
      console.error(
        "Processed prices sample:",
        pricesInCentsPerKWh.slice(0, 3)
      );
      console.error("Valid price count:", validPriceCount);
      handleNoDataForDate();
      return;
    }

    // --- Highlight 4 lowest prices as green bars ---
    // Find indices of the 4 lowest prices
    const priceWithIndices = pricesInCentsPerKWh.map((price, idx) => ({
      price,
      idx,
    }));
    // Sort by price ascending
    priceWithIndices.sort((a, b) => a.price - b.price);
    // Get indices of the 4 lowest prices
    const lowestIndices = priceWithIndices.slice(0, 4).map((obj) => obj.idx);
    // Create backgroundColor array
    const backgroundColor = pricesInCentsPerKWh.map((_, idx) =>
      lowestIndices.includes(idx) ? "#d5ff6a" : "#33b276"
    );
    // --- End highlight logic ---

    const avgPrice = totalPrice / validPriceCount;
    const minPriceHour =
      minPriceIndex !== -1
        ? formatTimeFromPosition(points[minPriceIndex].position)
        : "N/A";
    const maxPriceHour =
      maxPriceIndex !== -1
        ? formatTimeFromPosition(points[maxPriceIndex].position)
        : "N/A";

    console.timeEnd("chartDataPrep");

    // Update chart and stats - this is the expensive operation
    console.time("chartRender");
    priceChart.data.labels = labels;
    priceChart.data.datasets[0].data = pricesInCentsPerKWh;
    priceChart.data.datasets[0].backgroundColor = backgroundColor; // <-- Set bar colors

    // Limit animations for faster rendering
    priceChart.options.animation = {
      duration: 200, // Very short animation for quicker rendering
    };

    priceChart.update();
    console.timeEnd("chartRender");

    // Update stats display after chart is updated (non-blocking)
    requestAnimationFrame(() => {
      updatePriceStats(
        minPrice,
        maxPrice,
        avgPrice,
        minPriceHour,
        maxPriceHour
      );
    });

    console.log("Chart updated successfully.");
  } catch (error) {
    console.error("CRITICAL: Error updating chart:", error);
    console.error(
      "Error stack:",
      error instanceof Error ? error.stack : "No stack trace"
    );
    console.error("Data that caused error:", data);
    console.error("Chart state:", {
      exists: !!priceChart,
      hasLabels: !!priceChart?.data?.labels,
      hasDatasets: !!priceChart?.data?.datasets?.[0],
    });
    handleNoDataForDate(); // This will call hideLoadingState
  }
}

// Handle cases where no data is available for the selected date OR request fails
function handleNoDataForDate() {
  console.error(
    `CRITICAL: No data shown for date: ${formatDate(currentSelectedDate)}`
  );
  console.error("Current Wized state:", window.Wized?.data?.r?.XLMtoJSON);
  console.error(
    "Loading state:",
    document.body.classList.contains("chart-loading")
  );
  console.error("Current timestamp:", new Date().toISOString());

  // Check if we can manually fetch the data as fallback
  if (window.Wized?.data?.r?.XLMtoJSON?.data) {
    console.warn("Data exists but validation failed, trying to process anyway");
    try {
      updateChartWithWizedData(window.Wized.data.r.XLMtoJSON.data);
      return; // Exit early if fallback worked
    } catch (error) {
      console.error("Fallback data processing failed:", error);
    }
  }

  if (priceChart) {
    priceChart.data.labels = [];
    priceChart.data.datasets[0].data = [];
    priceChart.update();
  }
  clearPriceStats(); // Show appropriate message in stats area
  hideLoadingState(); // Ensure loading indicator is hidden
}

// Show loading state UI
function showLoadingState() {
  console.log("Showing loading state...");
  const chartWrapper = document.querySelector(".chart-wrapper");
  const statsContainer = document.getElementById("priceStats");

  if (chartWrapper) {
    chartWrapper.classList.add("loading");
    // Optional: Add a visual overlay or spinner if desired
    let overlay = chartWrapper.querySelector(".loading-overlay") as HTMLElement; // Cast to HTMLElement
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "loading-overlay";
      overlay.style.position = "absolute";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.right = "0";
      overlay.style.bottom = "0";
      overlay.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
      overlay.style.display = "flex";
      overlay.style.justifyContent = "center";
      overlay.style.alignItems = "center";
      overlay.style.zIndex = "10";
      overlay.innerHTML = '<div class="loader"></div>'; // Simple spinner div
      chartWrapper.appendChild(overlay);
    }
    overlay.style.display = "flex"; // Now TS knows 'style' exists
  }

  if (statsContainer) {
    statsContainer.innerHTML =
      '<div style="text-align: center; width: 100%; padding: 20px; color: #777;">Daten werden geladen...</div>';
  }

  document.body.classList.add("chart-loading"); // Add class to body for easier button disabling checks
  updateNextButtonState(); // Disable navigation buttons
}

// Hide loading state UI
function hideLoadingState() {
  console.log("Hiding loading state...");
  const chartWrapper = document.querySelector(".chart-wrapper");

  if (chartWrapper) {
    chartWrapper.classList.remove("loading");
    const overlay = chartWrapper.querySelector(
      ".loading-overlay"
    ) as HTMLElement; // Cast to HTMLElement
    if (overlay) {
      overlay.style.display = "none"; // Now TS knows 'style' exists
    }
  }
  document.body.classList.remove("chart-loading"); // Remove body class
  updateNextButtonState(); // Re-enable navigation buttons if appropriate
}

// Inject CSS styles
function injectStyles() {
  const styles = `
    .chart-wrapper {
      font-family: 'Fira Sans', sans-serif;
      color: #333;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 20px;
      background-color: #FFFFFF;
      border: 1px solid #EAEAEA;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      position: relative; /* Needed for overlay */
    }
    .chart-title-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
     .chart-main-title {
         margin: 0;
         padding: 0;
         font-size: 18px;
         font-weight: 600;
         color: #000;
     }
    .date-nav-container {
        display: flex;
        align-items: center;
        position: relative; /* Required for absolute positioning */
    }
    .date-display-container {
        position: relative; /* Required for absolute positioning */
        margin: 0 8px;
    }
    .date-nav-button {
        background-color: #f0f0f0;
        border: 1px solid #dcdcdc;
        color: #555;
        padding: 4px 8px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        line-height: 1;
        transition: background-color 0.2s, opacity 0.2s;
        height: 28px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        z-index: 5; /* Ensure buttons are above other elements */
        position: relative; /* Required for z-index */
    }
    .date-nav-button:hover:not(:disabled) {
        background-color: #e0e0e0;
    }
    .date-nav-button:disabled,
    .date-nav-button.disabled {
        opacity: 0.5;
        cursor: not-allowed !important;
    }
    .date-display {
        background-color: #fff;
        border: 1px solid #dcdcdc;
        color: #333;
        padding: 5px 12px;
        border-radius: 4px;
        font-size: 14px;
        min-width: 90px;
        text-align: center;
        font-weight: 500;
        height: 28px;
        line-height: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        position: relative; /* Required for z-index */
        z-index: 5; /* Ensure visible above other elements */
    }
    .date-picker-trigger {
        cursor: pointer;
        transition: background-color 0.2s, border-color 0.2s;
    }
    .date-picker-trigger:hover {
        background-color: #f8f8f8;
        border-color: #bbb;
    }
    .date-picker-trigger:focus {
        outline: none;
        border-color: #4A90E2;
        box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
    }
    .calendar-icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-left: 6px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="%23555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .date-picker-input {
        position: absolute;
        /* Position below date display */
        top: 100%;
        left: 0;
        margin-top: 4px;
        z-index: 100;
        /* Match chart styling */
        font-family: 'Fira Sans', sans-serif;
        font-size: 16px;
        color: #333;
        border-radius: 4px;
        border: 1px solid #dcdcdc;
        background-color: #fff;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        /* For different states of visibility */
        opacity: 0;
        height: 1px;
        width: 1px;
        transition: opacity 0.2s;
    }
    /* Make date picker match the chart theme when visible */
    .date-picker-input.visible {
        opacity: 1;
        height: auto;
        width: auto;
    }
    /* Ensure date picker is really hidden when not in use */
    .date-picker-input:not(.visible) {
        pointer-events: none;
    }
    
    /* Create a clickable overlay when date picker is open */
    .date-picker-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.1);
        z-index: 90;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s;
    }
    .date-picker-overlay.visible {
        opacity: 1;
        pointer-events: auto;
    }
    
    /* For browsers that support styling native date inputs */
    .date-picker-input::-webkit-calendar-picker-indicator {
        background-color: #4A90E2;
        padding: 5px;
        border-radius: 3px;
    }
    input[type="date"] {
        color: #333;
        background-color: #fff;
    }
    
    .chart-scroll-wrapper { /* New wrapper for scrolling */
      overflow-x: auto;
      overflow-y: hidden; /* Prevent vertical scroll */
      margin-bottom: 20px; /* Keep margin consistent */
      -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
      scrollbar-width: thin; /* Firefox */
      scrollbar-color: #ccc #eee; /* Firefox */
    }
    .chart-scroll-wrapper::-webkit-scrollbar { /* Chrome/Safari */
        height: 8px;
    }
    .chart-scroll-wrapper::-webkit-scrollbar-track { /* Chrome/Safari */
        background: #eee;
        border-radius: 4px;
    }
    .chart-scroll-wrapper::-webkit-scrollbar-thumb { /* Chrome/Safari */
        background: #ccc;
        border-radius: 4px;
    }

    .chart-container {
        position: relative;
        height: 350px; /* Increase base height slightly */
        width: 100%;
        min-width: 700px; /* Set min-width for chart content */
        /* margin-bottom removed, handled by wrapper */
    }
    #priceStats { 
      display: flex; 
      justify-content: space-around; 
      margin-top: 20px; 
      gap: 15px; 
      flex-wrap: wrap; 
      height: 100%; 
    }
    
    .stat-box { 
      flex: 1; 
      min-width: 160px; 
      max-width: 200px; 
      padding: 20px; 
      padding-right: 65px; /* Extra padding for icon space */
      border-radius: 12px; 
      text-align: left; 
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      border: 1px solid #e9ecef;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      transition: transform 0.2s ease, box-shadow 0.2s ease; 
      position: relative; 
      overflow: hidden;
    }
    
    .stat-box:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(0,0,0,0.12);
    }
    
    /* Icon containers - positioned to not interfere with text */
    .stat-box::before { 
      content: ''; 
      position: absolute; 
      top: 15px; 
      right: 15px; 
      width: 40px; 
      height: 40px; 
      border-radius: 8px; 
      background-repeat: no-repeat; 
      background-position: center; 
      background-size: 20px 20px; 
      opacity: 0.9;
      flex-shrink: 0; /* Prevent icon from shrinking */
    }
    
    /* Highest Price - Red/Orange theme */
    .highest-price::before { 
      background-color: #ff6b6b; 
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>'); 
    }
    
    /* Lowest Price - Green theme */
    .lowest-price::before { 
      background-color: #33b276; 
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 18 10.5 8.5 15.5 13.5 23 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>'); 
    }
    
    /* Average Price - Blue theme */
    .average-price::before { 
      background-color: #1e22aa; 
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18m-9-9v18"></path></svg>'); 
    }
    
    /* Enhanced text styling with proper spacing */
    .stat-box-title { 
      font-size: 12px; 
      color: #6c757d; 
      margin-bottom: 8px; 
      font-weight: 600; 
      text-transform: uppercase;
      letter-spacing: 0.5px;
      line-height: 1.3;
      padding-right: 0; /* No additional padding needed due to container padding */
      max-width: 100%; /* Ensure it doesn't exceed container width */
      word-wrap: break-word; /* Allow long words to break */
      hyphens: auto; /* Enable hyphenation for better text flow */
    }
    
    .stat-value { 
      font-size: 28px; 
      font-weight: 700; 
      color: #212529; 
      margin-bottom: 4px; 
      line-height: 1.1;
      word-wrap: break-word;
    }
    
    .stat-label { 
      font-size: 13px; 
      color: #495057; 
      margin-bottom: 8px; 
      font-weight: 500; 
      line-height: 1.2;
    }
    
    .stat-indicator { 
      font-size: 11px; 
      color: #6c757d; 
      margin-top: 0; 
      font-weight: 500;
      line-height: 1.3;
      word-wrap: break-word;
    }
    
    .stat-indicator.positive { 
      color: #51cf66; 
    }
    
    .stat-indicator.negative { 
      color: #ff6b6b; 
    }
    
    /* Add subtle accent borders */
    .highest-price {
      border-left: 4px solid #ff6b6b;
    }
    
    .lowest-price {
      border-left: 4px solid #51cf66;
    }
    
    .average-price {
      border-left: 4px solid #4dabf7;
    }
    
    /* Responsive adjustments for smaller screens */
    @media (max-width: 768px) { 
      .stat-box { 
        padding: 15px; 
        padding-right: 55px; /* Adjust for smaller screens */
        max-width: 100%; 
        width: 100%; 
        margin-bottom: 15px; 
      }
      
      .stat-box::before {
        width: 35px;
        height: 35px;
        background-size: 18px 18px;
      }
      
      .stat-value { 
        font-size: 24px; 
      }
      
      .stat-label { 
        font-size: 12px; 
      }
    }
    
    @media (max-width: 480px) { 
      .stat-box { 
        padding: 12px; 
        padding-right: 50px; /* Further adjust for mobile */
      }
      
      .stat-box::before {
        width: 32px;
        height: 32px;
        background-size: 16px 16px;
        top: 12px;
        right: 12px;
      }
      
      .stat-value { 
        font-size: 20px; 
      }
    }

    /* Loading State Styles */
    .chart-wrapper.loading .chart-container,
    .chart-wrapper.loading #priceStats {
        /* Optional: reduce opacity or blur while loading */
        /* opacity: 0.5; */
    }
    /* Uses the overlay defined in showLoadingState */
    .loading-overlay .loader {
        border: 4px solid #f3f3f3; /* Light grey */
        border-top: 4px solid #4A90E2; /* Blue */
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
  console.log("Chart styles injected");
}

// Initialize chart structure
function initChart() {
  if (priceChart) return;
  console.log("Initializing chart structure...");

  // Find the original container and the canvas
  const chartContainerElement = document.querySelector(".chart-container");
  const chartCanvas = document.getElementById(
    "priceChart"
  ) as HTMLCanvasElement;

  if (!chartContainerElement || !chartCanvas) {
    console.error("Chart container or canvas element not found");
    return;
  }

  // Create the scroll wrapper if it doesn't exist
  let scrollWrapper = chartContainerElement.parentElement;
  if (
    !scrollWrapper ||
    !scrollWrapper.classList.contains("chart-scroll-wrapper")
  ) {
    scrollWrapper = document.createElement("div");
    scrollWrapper.className = "chart-scroll-wrapper";
    // Insert the wrapper before the container and move the container inside it
    chartContainerElement.parentNode?.insertBefore(
      scrollWrapper,
      chartContainerElement
    );
    scrollWrapper.appendChild(chartContainerElement);
  }

  const colors = {
    grid: "rgba(0, 0, 0, 0.08)",
    bar: "#E0E0E0",
    text: "#333",
    title: "#000",
    subtitle: "#555",
  };
  const titleFont: Partial<FontSpec> = {
    size: 18,
    weight: 600,
    family: "'Fira Sans', sans-serif",
  };
  const tickFont: Partial<FontSpec> = {
    size: 12,
    family: "'Fira Sans', sans-serif",
  };

  // Register custom plugin to display price labels above bars
  const priceLabelsPlugin = {
    id: "priceLabels",
    afterDatasetsDraw(chart: any) {
      const { ctx, data, chartArea, scales } = chart;
      const dataset = data.datasets[0];

      // Need at least 2 points to calculate spacing
      if (!dataset.data || dataset.data.length < 2) return;

      // Calculate approximate space per bar based on the first two points
      const barSpacing =
        scales.x.getPixelForValue(1) - scales.x.getPixelForValue(0);

      // Minimum spacing required to draw labels comfortably (adjust px value as needed)
      const minSpacingForLabels = 25;

      // If bars are too close together, skip drawing labels to improve performance
      if (barSpacing < minSpacingForLabels) {
        // Optional: Log when skipping
        // console.log(`Skipping price labels, bar spacing (${barSpacing.toFixed(1)}px) too small.`);
        return;
      }

      // Configure label style - Adjust font size slightly for better fit
      const isMobile = window.innerWidth < 768; // Keep for font size check
      ctx.font = isMobile
        ? '10px "Fira Sans", sans-serif'
        : '11px "Fira Sans", sans-serif';
      ctx.textAlign = "center";
      ctx.fillStyle = "#555";

      // Draw each price label - only process visible bars for performance
      const visibleIndices = [];
      for (let i = 0; i < dataset.data.length; i++) {
        const xPos = scales.x.getPixelForValue(i);
        // Only process bars that are in the visible area
        if (
          xPos >= chartArea.left - barSpacing &&
          xPos <= chartArea.right + barSpacing
        ) {
          visibleIndices.push(i);
        }
      }

      // Only draw labels for visible bars
      visibleIndices.forEach((index) => {
        const value = dataset.data[index];
        const xPos = scales.x.getPixelForValue(index);
        const yPos = scales.y.getPixelForValue(value) - 5; // Position above bar

        // Avoid drawing labels too close to the top edge if price is high
        if (yPos < chartArea.top + 10) return;

        const formattedValue = value.toLocaleString("de-DE", {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        });
        ctx.fillText(formattedValue, xPos, yPos);
      });
    },
  };

  // Check if plugin is already registered
  if (!Chart.registry.plugins.get("priceLabels")) {
    Chart.register(priceLabelsPlugin);
  }

  // Use faster animation options for the initial render
  priceChart = new Chart(chartCanvas, {
    type: "bar",
    data: {
      labels: [],
      datasets: [
        {
          label: "Cent/kWh",
          data: [],
          backgroundColor: colors.bar,
          borderWidth: 0,
          borderRadius: 0,
          barPercentage: 0.6,
          categoryPercentage: 0.7,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, // Important when container scrolls
      animation: {
        duration: 0, // Disable animation for initial render
      },
      plugins: {
        legend: { display: false },
        title: { display: false }, // Title is handled outside chart now
        tooltip: {
          enabled: true,
          backgroundColor: "rgba(0,0,0,0.7)",
          titleColor: "#fff",
          bodyColor: "#fff",
          callbacks: {
            title: function (context) {
              const hour = Number(context[0].label);
              if (!isNaN(hour)) {
                return `${String(hour).padStart(2, "0")}:00 - ${String(
                  hour + 1
                ).padStart(2, "0")}:00`;
              }
              return context[0].label;
            },
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) {
                label += ": ";
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y.toLocaleString("de-DE", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                });
              }
              return label;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: colors.grid, drawBorder: false },
          border: { display: false },
          title: {
            display: true,
            text: "Cent/kWh",
            color: colors.text,
            font: {
              size: 14,
              weight: 500,
              family: "'Fira Sans', sans-serif",
            },
            padding: {
              top: 0,
              bottom: 10,
            },
          },
          ticks: {
            color: colors.text,
            font: tickFont,
            padding: 10,
            stepSize: 5,
            callback: function (value) {
              const numericValue = Number(value);
              if (
                !isNaN(numericValue) &&
                Number.isFinite(numericValue) &&
                numericValue % 5 === 0
              ) {
                return numericValue.toLocaleString("de-DE");
              }
              return null;
            },
          },
        },
        x: {
          grid: { display: false },
          border: { display: false },
          title: {
            display: true,
            text: "Stunden",
            color: colors.text,
            font: {
              size: 14,
              weight: 500,
              family: "'Fira Sans', sans-serif",
            },
            padding: {
              top: 10,
              bottom: 0,
            },
          },
          ticks: {
            color: colors.text,
            font: tickFont,
            padding: 5,
            callback: function (value, index) {
              // Always return the label now
              return this.getLabelForValue(index);
            },
            maxRotation: 0, // Prevent label rotation
          },
        },
      },
    },
  } as ChartConfiguration);
  console.log("Chart structure created.");

  // Add resize listener with debounce for better performance
  let resizeTimeout: number;
  window.addEventListener("resize", () => {
    // Cancel previous timeout
    clearTimeout(resizeTimeout);
    // Set new timeout - only perform resize if user has stopped resizing
    resizeTimeout = window.setTimeout(() => {
      if (priceChart) {
        console.log("Resizing chart...");
        priceChart.resize(); // Let chart.js handle resizing within its container
      }
    }, 250);
  });
}

// Update price statistics display
function updatePriceStats(
  minPrice: number,
  maxPrice: number,
  avgPrice: number,
  minPriceHour: string,
  maxPriceHour: string
) {
  const statsContainer = document.getElementById("priceStats");
  if (!statsContainer) return;
  // Clear any previous loading/error messages
  statsContainer.innerHTML = "";

  const formatNumber = (num: number) =>
    num.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  // Placeholders for indicators - replace with actual logic if available
  const highestPriceIndicator = `um ${maxPriceHour}`; // Use hour directly
  const lowestPriceIndicator = `um ${minPriceHour}`;
  // const averagePriceIndicator = "-1.3% ggü. Vortag"; // Placeholder - remove if no comparison data
  const averagePriceIndicator = `über ${
    priceChart?.data?.labels?.length || 0
  } Stunden`; // Show duration

  statsContainer.innerHTML = `
    <div class="stat-box highest-price">
      <div class="stat-box-title">Höchster Preis</div>
      <div class="stat-value">${formatNumber(maxPrice)}</div>
      <div class="stat-label">Cent/kWh</div>
      <div class="stat-indicator positive">${highestPriceIndicator}</div>
    </div>
    <div class="stat-box lowest-price">
      <div class="stat-box-title">Niedrigster Preis</div>
      <div class="stat-value">${formatNumber(minPrice)}</div>
      <div class="stat-label">Cent/kWh</div>
      <div class="stat-indicator">${lowestPriceIndicator}</div>
    </div>
    <div class="stat-box average-price">
       <div class="stat-box-title">Durchschnittspreis</div>
      <div class="stat-value">${formatNumber(avgPrice)}</div>
      <div class="stat-label">Cent/kWh</div>
      <div class="stat-indicator">${averagePriceIndicator}</div>
    </div>
  `;
}

// Clear price stats and show a message
function clearPriceStats() {
  const statsContainer = document.getElementById("priceStats");
  if (statsContainer) {
    // Check if we are in loading state to show appropriate message
    const isLoading = document.body.classList.contains("chart-loading");
    if (isLoading) {
      statsContainer.innerHTML =
        '<div style="text-align: center; width: 100%; padding: 20px; color: #777;">Statistikdaten werden geladen...</div>';
    } else {
      statsContainer.innerHTML =
        '<div style="text-align: center; width: 100%; padding: 20px; color: #777;">Keine Daten für Statistik verfügbar.</div>';
    }
  }
}
