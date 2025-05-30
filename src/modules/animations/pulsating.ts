export const pulsating = () => {
  const pulsatingButtons = document.querySelectorAll(".contact-button-fixed");
  if (!pulsatingButtons.length) return;

  // Create keyframe styles for pulsating and gradient effects
  const style = document.createElement("style");
  style.textContent = `
    @keyframes pulsate {
      0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(213, 255, 106, 0.7);
      }
      50% {
        transform: scale(1.05);
        box-shadow: 0 0 0 10px rgba(51, 178, 118, 0);
      }
      100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(213, 255, 106, 0);
      }
    }

    @keyframes gradientShift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `;
  document.head.appendChild(style);

  // Apply animations to all contact buttons
  pulsatingButtons.forEach((button) => {
    const buttonElement = button as HTMLElement;
    buttonElement.style.animation = "pulsate 3s ease-in-out infinite";
    buttonElement.style.background = "linear-gradient( #33b276)";
    buttonElement.style.backgroundSize = "200% 200%";
    buttonElement.style.animation =
      "pulsate 3s ease-in-out infinite, gradientShift 6s ease infinite";
  });
};
