import { animate } from "animejs";

// IDs for easier targeting
const LOADER_ID = "fw-page-loader";
const LOGO_ID = "fw-loader-logo";
const RINGS_CONTAINER_ID = "fw-loader-rings";
const MIN_DISPLAY_TIME = 1750; // Minimum time to display the loader on initial page load (ms)
const MIN_TRANSITION_TIME = 1200; // Minimum time to display the loader during page transitions (ms)
const NUM_RINGS = 3; // Number of ripple rings

// Remove the explicit type annotation to let TypeScript infer it
let logoAnimation: any = null;
let ringsAnimation: any = null;
let initialLoadCompleted = false;
let transitionInProgress = false;
let scrollPosition = 0; // Store scroll position when disabling scroll

/**
 * Adds only the essential CSS animations needed for the loader to work.
 * Does not override Webflow styling.
 */
function addEssentialStyles() {
  // Add CSS animation for the logo if not already present
  if (!document.getElementById("loader-animations-style")) {
    const styleSheet = document.createElement("style");
    styleSheet.id = "loader-animations-style";
    styleSheet.textContent = `
      
      /* Add no-scroll class styles to prevent scrolling */
      body.no-scroll {
        overflow: hidden;
        position: fixed;
        width: 100%;
        height: 100%;
      }
      
      /* Essential animation styles for rings */
      .fw-loader-ring {
        position: absolute;
        border: 2px solid rgba(2, 184, 8, 0.87);
        border-radius: 50%;
        width: 120px;
        height: 120px;
        opacity: 0;
        transform: scale(0.8);
        transform-origin: center center;
        will-change: transform, opacity;
      }
      
    `;
    document.head.appendChild(styleSheet);
  }
}

/**
 * Disables page scrolling while loader is active
 */
function disableScroll() {
  if (typeof window === "undefined") return;

  // Store current scroll position
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Add no-scroll class to body
  document.body.classList.add("no-scroll");

  // Set the body's top position to the negative of the current scroll position
  // This prevents the visual "jump" when disabling scroll
  document.body.style.top = `-${scrollPosition}px`;
}

/**
 * Enables page scrolling after loader is hidden
 */
function enableScroll() {
  if (typeof window === "undefined") return;

  // Remove no-scroll class
  document.body.classList.remove("no-scroll");

  // Reset the body position
  document.body.style.top = "";

  // Restore scroll position
  window.scrollTo({ top: scrollPosition });
}

/**
 * Starts the pulsating animation for the logo.
 */
function startLogoAnimation() {
  let logoElement = document.getElementById(LOGO_ID);

  // If logo not found by ID, try by class
  if (!logoElement) {
    logoElement = document.querySelector(".fw-loader-logo") as HTMLElement;
  }

  if (!logoElement) {
    console.warn(
      "Logo element not found. Make sure to create it in Webflow with ID 'fw-loader-logo' or class 'fw-loader-logo'."
    );
    return;
  }

  // The logo animation is now handled by CSS animation
  // Start only the ripple animation with anime.js
  startRippleAnimation();
}

/**
 * Starts the ripple animation for the rings around the logo.
 */
function startRippleAnimation() {
  const rings = document.querySelectorAll(".fw-loader-ring");
  if (!rings.length) {
    console.warn(
      "Ring elements not found. Make sure to create them in Webflow with class 'fw-loader-ring'."
    );
    return;
  }

  // If animation exists, stop it to prevent stacking animations
  if (ringsAnimation) {
    ringsAnimation.pause();
  }

  // Animate the rings with a staggered delay to create the ripple effect
  ringsAnimation = animate(".fw-loader-ring", {
    scale: [0.8, 2], // Scale from smaller to larger
    opacity: [0.7, 0], // Fade out as they expand
    duration: 2000,
    delay: function (el, i) {
      return i * 600; // Increased stagger for smoother sequence
    },
    easing: "easeOutQuad",
    loop: true,
    endDelay: function (el, i) {
      return (NUM_RINGS - 1 - i) * 400; // Staggered end delay
    },
  });
}

/**
 * Pauses the pulsating animation for the logo.
 */
function stopLogoAnimation() {
  // The logo animation is now handled by CSS
  if (ringsAnimation) {
    ringsAnimation.pause();
  }
}

/**
 * Fades in the loader element and starts the logo animation.
 * Returns a Promise that resolves when the animation is complete.
 */
function showLoader(): Promise<void> {
  return new Promise((resolve) => {
    const loaderElement = document.getElementById(LOADER_ID);
    if (!loaderElement) {
      console.error("Page loader element not found for showLoader.");
      resolve();
      return;
    }

    // Disable scrolling
    disableScroll();

    // Set flag that transition is in progress
    transitionInProgress = true;

    // Use CSS transitions for smooth fade
    loaderElement.style.visibility = "visible";
    loaderElement.style.pointerEvents = "auto";

    // Use a timeout to ensure the visibility change has been applied
    setTimeout(() => {
      loaderElement.style.opacity = "1";
      startLogoAnimation(); // Start pulsing

      // Wait for transition to complete
      setTimeout(() => {
        resolve();
      }, 500);
    }, 10);
  });
}

/**
 * Fades out the loader element and stops the logo animation.
 * Returns a Promise that resolves when the animation is complete.
 */
function hideLoader(): Promise<void> {
  return new Promise((resolve) => {
    const loaderElement = document.getElementById(LOADER_ID);
    if (!loaderElement) {
      console.error("Page loader element not found for hideLoader.");
      resolve();
      return;
    }

    // Use CSS transitions for smoother fade
    loaderElement.style.opacity = "0";
    loaderElement.style.pointerEvents = "none";

    // Wait for transition to complete
    setTimeout(() => {
      loaderElement.style.visibility = "hidden";
      stopLogoAnimation();
      transitionInProgress = false;

      // Enable scrolling
      enableScroll();

      resolve();
    }, 500);
  });
}

/**
 * Handles the initial page load - shows loader and hides after minimum time
 * and page load are both complete.
 */
function handleInitialPageLoad() {
  let pageLoaded = false;
  let timerElapsed = false;
  let hardTimeoutElapsed = false;

  // Show the loader for initial page load
  showLoader();

  // Check if any condition is met to hide the loader
  function checkHideConditions() {
    if (
      (pageLoaded && timerElapsed && !initialLoadCompleted) ||
      hardTimeoutElapsed
    ) {
      hideLoader();
      initialLoadCompleted = true;
    }
  }

  // Set up minimum display time timer
  setTimeout(() => {
    timerElapsed = true;
    checkHideConditions();
  }, MIN_DISPLAY_TIME);

  // Listen for window load event
  window.addEventListener("load", () => {
    pageLoaded = true;
    checkHideConditions();
  });

  // Listen for pageshow (bfcache restore)
  window.addEventListener("pageshow", (event) => {
    if ((event as PageTransitionEvent).persisted) {
      pageLoaded = true;
      checkHideConditions();
    }
  });

  // Hard timeout: forcibly hide loader after 5 seconds (safety net)
  setTimeout(() => {
    hardTimeoutElapsed = true;
    checkHideConditions();
  }, 5000);
}

/**
 * Handles page transition sequence with minimum display time
 */
async function handlePageTransition(callback: Function) {
  // Show loader on current page
  await showLoader();

  // Set minimum display time for transition
  const startTime = Date.now();

  // Execute the actual page change
  callback();

  // Ensure loader stays visible for minimum time
  const elapsedTime = Date.now() - startTime;
  if (elapsedTime < MIN_TRANSITION_TIME) {
    await new Promise((resolve) =>
      setTimeout(resolve, MIN_TRANSITION_TIME - elapsedTime)
    );
  }

  // Loader will be hidden by the afterEnter hook
}

/**
 * Initializes the page loader and integrates it with Xatom page transitions.
 * This is the main function to call in your app.
 */
export function initPageLoader() {
  // Add essential CSS animations
  addEssentialStyles();

  // Handle initial page load
  handleInitialPageLoad();

  // Get the Xatom page object
  try {
    const xatom = require("@xatom/core");
    if (xatom && xatom.page) {
      // Show loader before leaving the current page
      xatom.page.beforeLeave(async (data: any, done: Function) => {
        // Use our enhanced transition handler
        await handlePageTransition(done);
      });

      // Hide loader after the new page has entered and is ready
      xatom.page.afterEnter(async () => {
        // Ensure minimum transition time has passed before hiding
        await hideLoader();
      });

      console.log("Page loader successfully initialized with Xatom");
    } else {
      console.warn(
        "Xatom page object not found. Please manually integrate the page loader."
      );
    }
  } catch (error) {
    console.warn("Failed to integrate with Xatom automatically:", error);
    console.info(
      "You can manually control the loader using the exported functions."
    );
  }

  // Return the control functions so they can be used manually if needed
  return {
    show: showLoader,
    hide: hideLoader,
  };
}

// Also export the individual functions for more granular control if needed
export { showLoader, hideLoader };

// Auto-initialize only the essential styles, don't override Webflow
if (typeof window !== "undefined") {
  // Only add essential CSS styles
  addEssentialStyles();
}
