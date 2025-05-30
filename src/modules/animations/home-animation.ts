import { animate } from "animejs";

// Helper: debounce function
function debounce(fn: (...args: any[]) => void, delay: number) {
  let timeout: number | undefined;
  return (...args: any[]) => {
    if (timeout) clearTimeout(timeout);
    timeout = window.setTimeout(() => fn(...args), delay);
  };
}

const LOGO_SELECTOR = ".nav_logo";
const HEIGHT_TOP = "6.5rem";
const HEIGHT_SCROLLED = "4rem";
const SCROLL_THRESHOLD = 5;

function setLogoHeight(height: string) {
  const logo = document.querySelector(LOGO_SELECTOR) as HTMLElement;
  if (!logo) return;
  logo.style.height = height;
}

function animateLogoHeight(toHeight: string) {
  const logo = document.querySelector(LOGO_SELECTOR) as HTMLElement;
  if (!logo) return;
  animate(logo, {
    height: toHeight,
    duration: 400,
    easing: "out(2)",
  });
}

function handleScroll() {
  const logo = document.querySelector(LOGO_SELECTOR) as HTMLElement;
  if (!logo) return;
  const scrollY = window.scrollY || window.pageYOffset;
  const atTop = scrollY <= SCROLL_THRESHOLD;
  const currentHeight = getComputedStyle(logo).height;
  const targetHeight = atTop ? HEIGHT_TOP : HEIGHT_SCROLLED;
  // Only animate if the height is different from the target
  if (
    (atTop && currentHeight !== HEIGHT_TOP) ||
    (!atTop && currentHeight !== HEIGHT_SCROLLED)
  ) {
    animateLogoHeight(targetHeight);
  }
}

// Exported function to initialize the scroll animation
export function initNavLogoScrollAnimation() {
  setLogoHeight(HEIGHT_TOP);
  window.addEventListener("scroll", debounce(handleScroll, 10));
}
