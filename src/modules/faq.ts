/**
 * FAQ Module
 * Controls the accordion behavior of FAQ items
 */
export function initFAQ(): void {
  // Wait for DOM to be fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".qa-wrap");

    // Set initial state - all closed
    faqItems.forEach((item) => {
      const answer = item.querySelector(".qa-answer") as HTMLElement;
      // Set initial grid-row-gap
      (item as HTMLElement).style.gridRowGap = "0rem";
      (item as HTMLElement).style.transition =
        "grid-row-gap 0.2s cubic-bezier(0.1, 0.1, 0.1, 1)";

      if (answer) {
        // Apply these styles directly
        answer.style.maxHeight = "0";
        answer.style.overflow = "hidden";
        answer.style.transition =
          "max-height 0.2s cubic-bezier(0.1, 0.1, 0.1, 0.1)";
      }
    });

    // Add click event listener to each FAQ item
    faqItems.forEach((item) => {
      const answer = item.querySelector(".qa-answer") as HTMLElement;
      const svgContainer = item.querySelector(".plus-svg") as HTMLElement;

      if (answer && svgContainer) {
        // Get the vertical line of the plus sign (first path in the SVG)
        const verticalLine = svgContainer.querySelector(
          "path:first-child"
        ) as SVGPathElement;

        // Make sure transitions are smooth
        if (verticalLine) {
          verticalLine.style.transition =
            "opacity 0.3s cubic-bezier(0.1, 0.1, 0.1, 0.1)";
        }

        // Add click event to the entire qa-wrap element
        item.addEventListener("click", (e) => {
          e.preventDefault();

          // Toggle active class
          const isActive = item.classList.contains("active");

          // Toggle SVG animation - transform plus to minus
          if (isActive) {
            // Return to plus by showing vertical line
            if (verticalLine) {
              verticalLine.setAttribute("opacity", "1");
            }
            // Set grid-row-gap to 0rem when closed
            (item as HTMLElement).style.gridRowGap = "0rem";
          } else {
            // Transform to minus by hiding vertical line
            if (verticalLine) {
              verticalLine.setAttribute("opacity", "0");
            }
            // Set grid-row-gap to 1rem when open
            (item as HTMLElement).style.gridRowGap = "1rem";
          }

          // Toggle answer visibility with slide animation
          if (isActive) {
            // Close the answer
            answer.style.maxHeight = "0";
            item.classList.remove("active");
          } else {
            // Open the answer
            item.classList.add("active");
            // Set a specific large value for max-height to ensure the content is fully visible
            answer.style.maxHeight = "1000px";
          }
        });
      }
    });
  });
}

// Initialize the module
initFAQ();
