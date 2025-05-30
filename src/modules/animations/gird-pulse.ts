export const gridPulse = () => {
  const grid = document.querySelector("#grid-pulse") as HTMLElement;
  if (!grid) return;

  // Create keyframe styles for multiple staggered pulsating rings
  const style = document.createElement("style");
  style.textContent = `
    @keyframes pulse-ring {
      0% {
        transform: scale(0.8);
        opacity: 0.7;
      }
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @keyframes gridScale {
      0% {
        transform: translate3d(0,0,0) scale(1);
      }
      100% {
        transform: translate3d(0,0,0) scale(1.15);
      }
    }

    #grid-pulse {
      position: relative;
      transform-origin: center;
      animation: gridScale 2s infinite alternate cubic-bezier(0.445, 0.05, 0.55, 0.95);
      backface-visibility: hidden;
      will-change: transform;
    }

    #grid-pulse::before,
    #grid-pulse::after,
    #grid-pulse .ring {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 2px solid rgba(51, 178, 118, 0.4);
      border-radius: inherit;
      pointer-events: none;
    }

    #grid-pulse::before {
      animation: pulse-ring 4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
      animation-delay: 0s;
    }

    #grid-pulse::after {
      animation: pulse-ring 4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
      animation-delay: 0.6s;
    }

    #grid-pulse .ring {
      animation: pulse-ring 4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
      animation-delay: 1.2s;
    }
  `;
  document.head.appendChild(style);

  // Add the third ring element
  const thirdRing = document.createElement("div");
  thirdRing.className = "ring";
  grid.appendChild(thirdRing);

  // Set base styles for the grid element
  grid.style.position = "relative";
  grid.style.transformOrigin = "center";
  grid.style.transform = "translate3d(0,0,0)"; // Force GPU acceleration
};
