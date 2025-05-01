import { animate } from "animejs";

// IDs for easier targeting
const LOADER_ID = "fw-page-loader";
const GRADIENT_ID = "fw-loader-gradient";
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

/**
 * Creates the loader HTML structure and appends it to the body.
 */
function createLoaderHTML() {
  // Prevent creating multiple loaders
  if (document.getElementById(LOADER_ID)) return;

  const loader = document.createElement("div");
  loader.id = LOADER_ID;
  // Basic styles for the loader container
  Object.assign(loader.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "9999",
    display: "flex", // Center content using flexbox
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    opacity: "1", // Start visible for initial page load
    visibility: "visible", // Start visible for initial page load
    pointerEvents: "auto", // Block interaction until page is ready
    transition: "opacity 0.5s ease", // Smooth CSS transition for opacity
    // The gradient will provide the background
  });

  // Create rings container for the ripple effect
  const ringsContainer = document.createElement("div");
  ringsContainer.id = RINGS_CONTAINER_ID;
  Object.assign(ringsContainer.style, {
    position: "absolute",
    display: "flex",
    opacity: "0.5",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "2",
  });

  // Create the ripple rings
  for (let i = 0; i < NUM_RINGS; i++) {
    const ring = document.createElement("div");
    ring.className = "fw-loader-ring";
    // Style the rings
    Object.assign(ring.style, {
      position: "absolute",
      border: "2px solid rgba(0, 151, 169, 0.4)", // Light blue border like the logo color
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      opacity: "0",
      transform: "scale(0.8)", // Start smaller than the logo
      transformOrigin: "center center",
      willChange: "transform, opacity", // Hint for browser to optimize these properties
      transition: "transform 0.5s ease, opacity 0.5s ease", // Smooth CSS transitions
    });
    ringsContainer.appendChild(ring);
  }

  // Logo element
  const logo = document.createElement("img");
  logo.id = LOGO_ID;
  logo.src =
    "https://cdn.prod.website-files.com/67bf7aa1075d0a8aedc77401/67c803c318bca5d2cf63557a_logo-forward-energie.png";
  logo.alt = "Loading...";
  Object.assign(logo.style, {
    maxWidth: "180px", // Adjust initial size as needed
    maxHeight: "120px", // Adjust initial size as needed
    position: "relative", // Position relative to the flex container
    zIndex: "3", // Ensure logo is above the rings and gradient
    transform: "translate3d(0,0,0) scale(1)", // Force GPU acceleration
    willChange: "transform", // Hint for browser to optimize transform property
    backfaceVisibility: "hidden", // Prevent flickering in some browsers
    transition: "transform 0.8s cubic-bezier(0.445, 0.05, 0.55, 0.95)", // Smooth CSS transition
    animation:
      "logoScale .8s infinite alternate cubic-bezier(0.445, 0.05, 0.55, 0.95)", // CSS animation
  });

  // Add elements to the loader
  loader.appendChild(ringsContainer);
  loader.appendChild(logo);
  document.body.appendChild(loader);

  // Add CSS animation for the logo
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    @keyframes logoScale {
      0% {
        transform: translate3d(0,0,0) scale(1);
      }
      100% {
        transform: translate3d(0,0,0) scale(1.15);
      }
    }
  `;
  document.head.appendChild(styleSheet);
}

/**
 * Starts the pulsating animation for the logo.
 */
function startLogoAnimation() {
  const logoElement = document.getElementById(LOGO_ID);
  if (!logoElement) return;

  // The logo animation is now handled by CSS animation
  // Start only the ripple animation with anime.js
  startRippleAnimation();
}

/**
 * Starts the ripple animation for the rings around the logo.
 */
function startRippleAnimation() {
  const rings = document.querySelectorAll(".fw-loader-ring");
  if (!rings.length) return;

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

    // Set flag that transition is in progress
    transitionInProgress = true;

    // Use CSS transitions instead of anime.js for smoother fade
    loaderElement.style.visibility = "visible";
    loaderElement.style.pointerEvents = "auto";

    // Use a timeout to ensure the visibility change has been applied
    setTimeout(() => {
      loaderElement.style.opacity = "1";
      startLogoAnimation(); // Start pulsing

      // Wait for transition to complete (match the CSS transition duration)
      setTimeout(() => {
        resolve();
      }, 500); // Match the transition time from CSS
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

    // Wait for transition to complete (match the CSS transition duration)
    setTimeout(() => {
      loaderElement.style.visibility = "hidden";
      stopLogoAnimation();
      transitionInProgress = false;
      resolve();
    }, 500); // Match the transition time from CSS
  });
}

/**
 * Handles the initial page load - shows loader and hides after minimum time
 * and page load are both complete.
 */
function handleInitialPageLoad() {
  let pageLoaded = false;
  let timerElapsed = false;

  // Start the logo animation immediately
  startLogoAnimation();

  // Check if both conditions are met to hide the loader
  function checkHideConditions() {
    if (pageLoaded && timerElapsed && !initialLoadCompleted) {
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
  // Create the loader HTML
  createLoaderHTML();

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

// Auto-initialize the loader for immediate display on script load
if (typeof window !== "undefined") {
  // Only run in browser environment, not during SSR
  createLoaderHTML();
  startLogoAnimation();
}
