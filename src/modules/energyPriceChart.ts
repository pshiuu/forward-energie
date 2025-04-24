import { onReady } from "@xatom/core";
import Chart, { ChartConfiguration, FontSpec } from "chart.js/auto"; // Import ChartConfiguration and FontSpec

/**
 * Energy Price Chart Module
 * This module creates a chart similar to the design shown in the image
 */

// Store chart instance globally
let priceChart: Chart | null = null;
// Store the currently selected date
let currentSelectedDate: Date = new Date();
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
    // Initialize chart structure and basic UI first
    initChart();
    updateDateDisplay(currentSelectedDate); // Displays today initially
    updateNextButtonState();

    console.log("Forcing initial load for the current day.");

    // 1. Calculate today's date range
    const today = new Date();
    const initialStartDate = new Date(today);
    initialStartDate.setHours(0, 0, 0, 0);
    const initialEndDate = new Date(today);
    initialEndDate.setDate(initialStartDate.getDate() + 1);
    initialEndDate.setHours(0, 0, 0, 0);
    const initialPeriodStart = formatDateToENTSOE(initialStartDate);
    const initialPeriodEnd = formatDateToENTSOE(initialEndDate);

    // 2. Update Wized variables to today's date range
    // We show loading state *before* updating variables and triggering the request
    showLoadingState();
    const variablesUpdated = updateWizedVariables(
      initialPeriodStart,
      initialPeriodEnd,
      Wized
    );

    // 3. Always execute the API request for today's data
    if (Wized.requests?.execute) {
      console.log("Executing initial XLMtoJSON request for today's data.");
      Wized.requests.execute("XLMtoJSON").catch((error: any) => {
        console.error("Error executing initial XLMtoJSON request:", error);
        handleNoDataForDate(); // Clear chart and hide loading on error
      });
      // Loading state will be hidden by the watcher when data arrives/fails
    } else {
      console.error("Wized.requests.execute not available for initial load!");
      // Hide loading if we cannot trigger the request
      hideLoadingState();
    }

    // Setup the watcher for subsequent data updates (from navigation or other triggers)
    if (Wized.reactivity && Wized.reactivity.watch) {
      Wized.reactivity.watch(
        () => Wized.data?.r?.XLMtoJSON?.data,
        (newData: any, oldData: any) => {
          console.log("Wized data watcher triggered.");
          if (!newData) {
            console.log("Watcher received null/undefined data.");
            handleNoDataForDate();
            return;
          }
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
            // (might happen if initial load variables were already correct)
            hideLoadingState();
          }
        },
        { deep: true }
      );
    } else {
      console.warn("Wized reactivity watcher not available.");
    }
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

  // Create date display that will act as a button to open the date picker
  const dateDisplay = document.createElement("div");
  dateDisplay.id = "dateDisplay";
  dateDisplay.className = "date-display date-picker-trigger";
  dateDisplay.setAttribute("role", "button");
  dateDisplay.setAttribute("tabindex", "0");
  dateDisplay.setAttribute("aria-label", "Datum auswählen");

  // Create hidden date input that will serve as our calendar
  const datePickerInput = document.createElement("input");
  datePickerInput.type = "date";
  datePickerInput.id = "datePickerInput";
  datePickerInput.className = "date-picker-input";
  // Set max date to today to prevent selecting future dates
  const today = new Date();
  datePickerInput.max = today.toISOString().split("T")[0]; // Format: YYYY-MM-DD

  // Position it absolutely but make it accessible for click/focus events
  datePickerInput.style.position = "absolute";
  datePickerInput.style.opacity = "0";
  datePickerInput.style.height = "0";
  datePickerInput.style.width = "0";
  datePickerInput.style.zIndex = "-1";
  // Prevent iOS zoom on focus
  datePickerInput.style.fontSize = "16px";

  const nextButton = document.createElement("button");
  nextButton.innerHTML = "›";
  nextButton.className = "date-nav-button date-nav-next";
  nextButton.setAttribute("aria-label", "Nächster Tag");

  dateNavContainer.appendChild(prevButton);
  dateNavContainer.appendChild(dateDisplay);
  dateNavContainer.appendChild(datePickerInput); // Add the hidden input to the DOM
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

  // Event listeners
  prevButton.addEventListener("click", () => navigateDays(-1));
  nextButton.addEventListener("click", () => navigateDays(1));

  // Make the date display clickable to open the date picker
  dateDisplay.addEventListener("click", openDatePicker);
  dateDisplay.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
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
  const datePickerInput = document.getElementById(
    "datePickerInput"
  ) as HTMLInputElement;
  if (datePickerInput) {
    // Set the current value to match the currently selected date
    const formattedDate = currentSelectedDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    datePickerInput.value = formattedDate;

    // For Safari and iOS, we need to make the input briefly visible for the picker to work
    datePickerInput.style.opacity = "1";
    datePickerInput.style.height = "100%";
    datePickerInput.style.width = "100%";
    datePickerInput.style.position = "fixed";
    datePickerInput.style.top = "0";
    datePickerInput.style.left = "0";
    datePickerInput.style.zIndex = "9999";

    // Focus and click to open the picker
    datePickerInput.focus();
    datePickerInput.click();

    // Hide it again after a short delay
    setTimeout(() => {
      datePickerInput.style.opacity = "0";
      datePickerInput.style.height = "0";
      datePickerInput.style.width = "0";
      datePickerInput.style.position = "absolute";
      datePickerInput.style.zIndex = "-1";
    }, 100);
  }
}

// Handle date selection from the date picker
function handleDatePickerChange(event: Event) {
  const datePickerInput = event.target as HTMLInputElement;
  if (!datePickerInput.value) return;

  const selectedDate = new Date(datePickerInput.value);
  // Ensure date is valid and not in the future
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate.getTime() > today.getTime()) {
    console.log("Cannot select future date");
    return;
  }

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
  const newDate = new Date(currentSelectedDate);
  newDate.setDate(currentSelectedDate.getDate() + days);
  newDate.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  console.log(
    "Current Selected Date before check:",
    currentSelectedDate.toISOString()
  );
  console.log("New Date to navigate to:", newDate.toISOString());
  console.log("Tomorrow's Date:", tomorrow.toISOString());

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
    ".date-nav-next"
  ) as HTMLButtonElement;
  if (!nextButton) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const selectedDay = new Date(currentSelectedDate);
  selectedDay.setHours(0, 0, 0, 0);

  // Hide the next button completely if the selected date is today
  // Otherwise, just disable it if we're loading
  const isLoading = document.body.classList.contains("chart-loading");

  if (selectedDay.getTime() === today.getTime()) {
    // Today's date - hide button completely
    nextButton.style.display = "none";
  } else {
    // Past date - show button but possibly disable if loading
    nextButton.style.display = "inline-flex";
    nextButton.disabled = isLoading;
    nextButton.classList.toggle("disabled", isLoading);
  }

  // Also update prev button state based on loading
  const prevButton = document.querySelector(
    ".date-nav-prev"
  ) as HTMLButtonElement;
  if (prevButton) {
    prevButton.disabled = isLoading;
    prevButton.classList.toggle("disabled", isLoading);
  }
}

// Handle date change: update display, Wized vars, and trigger API request
function handleDateChange(newDate: Date, Wized: any) {
  // Accept Wized object
  currentSelectedDate = newDate;
  updateDateDisplay(currentSelectedDate);

  const startDate = new Date(newDate);
  startDate.setHours(0, 0, 0, 0);
  const endDate = new Date(newDate);
  // ENTSO-E API uses the start of the *next* day as the end period for a full day query
  endDate.setDate(startDate.getDate() + 1);
  endDate.setHours(0, 0, 0, 0);

  const periodStart = formatDateToENTSOE(startDate);
  const periodEnd = formatDateToENTSOE(endDate);

  console.log(`Attempting to set Wized vars for: ${formatDate(newDate)}`);
  // Log the Wized requests API availability
  console.log("Wized requests API available:", !!Wized?.requests?.execute);

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
      Wized.requests
        .execute("XLMtoJSON")
        .then(() => {
          console.log("XLMtoJSON request completed successfully");
        })
        .catch((error: any) => {
          console.error("Error executing XLMtoJSON request:", error);
          // Handle error: Clear chart, show message, hide loading
          handleNoDataForDate();
        });
      // Loading state will be hidden by the watcher when data arrives or if request fails
      return; // We've triggered a request, so we can return
    } else {
      // Variables changed but we can't execute the request
      console.error(
        "Variables changed, but Wized.requests.execute not available! Relying on reactivity."
      );
      // Keep loading state active, maybe the watcher will pick it up?
      // Or hide after a timeout? For now, leave it to the watcher.
    }
  } else {
    // If variable update was skipped (variables were already correct)
    console.log(
      "Variable update skipped (already correct), hiding loading state."
    );
    hideLoadingState(); // Hide loading immediately
  }
}

// Update the date display UI element
function updateDateDisplay(date: Date) {
  const dateDisplayElement = document.getElementById("dateDisplay");
  if (dateDisplayElement) {
    dateDisplayElement.textContent = formatDate(date);
  }
}

// Format date for ENTSO-E API (YYYYMMDDHHMM)
function formatDateToENTSOE(date: Date): string {
  return (
    date.getFullYear() +
    String(date.getMonth() + 1).padStart(2, "0") +
    String(date.getDate()).padStart(2, "0") +
    String(date.getHours()).padStart(2, "0") +
    "00"
  );
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
  return (
    data &&
    data.timeSeries &&
    Array.isArray(data.timeSeries) &&
    data.timeSeries.length > 0 &&
    data.timeSeries[0].periods &&
    Array.isArray(data.timeSeries[0].periods) &&
    data.timeSeries[0].periods.length > 0 &&
    data.timeSeries[0].periods[0].points &&
    Array.isArray(data.timeSeries[0].periods[0].points) &&
    data.timeSeries[0].periods[0].points.length > 0
  );
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
  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
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
    console.warn("Invalid data for chart update called with:", data);
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
    const period = data.timeSeries[0].periods[0];
    const points = period.points;

    // Ensure points is an array and has length
    if (!Array.isArray(points) || points.length === 0) {
      console.warn("No points data found in the period.");
      handleNoDataForDate(); // This will call hideLoadingState (redundant, but safe)
      return;
    }

    const labels = points.map((point: any) => (point.position - 1).toString()); // 0-23
    const pricesInCentsPerKWh = points.map((point: any) =>
      convertMWhToCentsPerKWh(point.price)
    );

    // Check if prices array is valid
    if (pricesInCentsPerKWh.length === 0 || pricesInCentsPerKWh.every(isNaN)) {
      console.warn("Processed prices resulted in empty or invalid array.");
      handleNoDataForDate();
      return;
    }

    let minPrice = Math.min(...pricesInCentsPerKWh.filter((p) => !isNaN(p)));
    let maxPrice = Math.max(...pricesInCentsPerKWh.filter((p) => !isNaN(p)));
    let validPrices = pricesInCentsPerKWh.filter((p) => !isNaN(p));
    let totalPrice = validPrices.reduce(
      (sum: number, price: number) => sum + price,
      0
    );
    let avgPrice = validPrices.length > 0 ? totalPrice / validPrices.length : 0;

    // Find positions for min/max after filtering NaNs
    let minPriceIndex = pricesInCentsPerKWh.findIndex((p) => p === minPrice);
    let maxPriceIndex = pricesInCentsPerKWh.findIndex((p) => p === maxPrice);
    let minPricePosition =
      minPriceIndex !== -1 ? points[minPriceIndex]?.position : null;
    let maxPricePosition =
      maxPriceIndex !== -1 ? points[maxPriceIndex]?.position : null;

    let minPriceHour = minPricePosition
      ? formatTimeFromPosition(minPricePosition)
      : "N/A";
    let maxPriceHour = maxPricePosition
      ? formatTimeFromPosition(maxPricePosition)
      : "N/A";

    priceChart.data.labels = labels;
    priceChart.data.datasets[0].data = pricesInCentsPerKWh;

    priceChart.update();
    updatePriceStats(minPrice, maxPrice, avgPrice, minPriceHour, maxPriceHour);
    console.log("Chart updated successfully.");
  } catch (error) {
    console.error("Error updating chart:", error, data);
    handleNoDataForDate(); // This will call hideLoadingState
  }
  // No finally block needed here as hideLoadingState is called at the start or in handleNoDataForDate
}

// Handle cases where no data is available for the selected date OR request fails
function handleNoDataForDate() {
  console.log(
    `Handling no data/error for date: ${formatDate(currentSelectedDate)}`
  );
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
        transition: background-color 0.2s, opacity 0.2s; /* Add opacity transition */
        height: 28px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .date-nav-button:hover:not(:disabled) {
        background-color: #e0e0e0;
    }
    .date-nav-button:disabled,
    .date-nav-button.disabled {
        opacity: 0.5;
        cursor: not-allowed !important; /* Ensure cursor style overrides */
    }
    .date-display {
        background-color: #fff;
        border: 1px solid #dcdcdc;
        color: #333;
        padding: 5px 12px;
        border-radius: 4px;
        font-size: 14px;
        margin: 0 8px;
        min-width: 90px;
        text-align: center;
        font-weight: 500;
        height: 28px;
        line-height: 16px;
    }
    .date-picker-trigger {
        cursor: pointer;
        transition: background-color 0.2s, border-color 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
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
    .date-picker-trigger::after {
        content: '';
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 6px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="%23555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .date-picker-input {
        opacity: 0;
        position: absolute;
        pointer-events: none;
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
    #priceStats { display: flex; justify-content: space-around; margin-top: 20px; gap: 15px; flex-wrap: wrap; height: 100%; }
    .stat-box { flex: 1; min-width: 160px; max-width: 200px; padding: 20px; border-radius: 8px; text-align: left; background-color: #F7F7F7; border-left: none; transition: transform 0.2s; position: relative; }
    .stat-box::after { content: ''; position: absolute; top: 15px; right: 15px; width: 30px; height: 30px; border-radius: 4px; background-color: #4A90E2; background-repeat: no-repeat; background-position: center; background-size: 60%; }
    .highest-price::after { background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white"><path d="M440-160v-488L216-424l-56-56 320-320 320 320-56 56-224-224v488h-80Z"/></svg>'); }
    .lowest-price::after { background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white"><path d="M480-320 160-640l56-56 264 264 264-264 56 56-320 320Z"/></svg>'); }
    .average-price::after { background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h400v-80H280v80Zm0-120h400v-80H280v80Zm0-120h400v-80H280v80Z"/></svg>'); }
    .stat-box-title { font-size: 12px; color: #555; margin-bottom: 10px; font-weight: 500; }
    .stat-value { font-size: 24px; font-weight: 600; color: #333; margin-bottom: 5px; }
    .stat-label { font-size: 14px; color: #555; margin-bottom: 10px; font-weight: 500; }
    .stat-indicator { font-size: 12px; color: #777; margin-top: 0; }
    .stat-indicator.positive { color: #2ECC71; }
    .stat-indicator.negative { color: #E74C3C; }
    @media (max-width: 768px) { .chart-title-container { flex-direction: column; align-items: flex-start; gap: 10px; } .date-nav-container { width: 100%; justify-content: flex-end;} #priceStats { align-items: center; } .stat-box { max-width: 90%; width: 100%; margin-bottom: 15px; } .chart-container { height: 320px; min-width: 1000px; } }
    @media (max-width: 480px) { .date-nav-button { padding: 4px 8px; font-size: 16px; } .date-display { padding: 5px 10px; font-size: 13px; } .chart-container { height: 300px; min-width: 1000px; } .chart-wrapper { padding: 15px; } .stat-box { padding: 15px; max-width: 100%; } .stat-value { font-size: 20px; } .stat-label { font-size: 12px; } }

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

      // Draw each price label
      dataset.data.forEach((value: number, index: number) => {
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

  // Add resize listener to update chart responsiveness
  // Debounce resize handler
  let resizeTimeout: number;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
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
