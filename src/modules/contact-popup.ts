// Type declaration for Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export const contactPopup = () => {
  // Create the main contact popup container
  const createContactPopup = () => {
    const popup = document.createElement("div");
    popup.className = "floating-contact-popup";
    popup.innerHTML = `
      <div class="contact-popup-container">
        <!-- Main contact button (always visible) -->
        <div class="main-contact-button">
          <img src="https://cdn.prod.website-files.com/67bf7aa1075d0a8aedc77401/67bf7aa1075d0a8aedc77448_email-icon-fill.svg" 
               alt="Contact" class="contact-icon main-icon">
          <span class="contact-text">Kontakt</span>
        </div>
        
        <!-- Expandable contact options -->
        <div class="contact-options">
          <a href="https://wa.me/+491719045678" target="_blank" class="contact-option" data-tooltip="WhatsApp">
            <img src="https://cdn.prod.website-files.com/67bf7aa1075d0a8aedc77401/6809c8daab3e78356fc6f628_115679_whatsapp_icon.png" 
                 alt="WhatsApp" class="contact-icon">
          </a>
          
          <a href="tel:+494030376305" class="contact-option" data-tooltip="Anrufen">
            <img src="https://cdn.prod.website-files.com/67bf7aa1075d0a8aedc77401/67bf7aa1075d0a8aedc77444_phone-icon.svg" 
                 alt="Telefon" class="contact-icon">
          </a>
          
          <a href="mailto:service@forwardenergie.de?subject=Webseiten%20Anfrage" class="contact-option" data-tooltip="E-Mail">
            <img src="https://cdn.prod.website-files.com/67bf7aa1075d0a8aedc77401/67bf7aa1075d0a8aedc77448_email-icon-fill.svg" 
                 alt="E-Mail" class="contact-icon">
          </a>
          
          <a href="#" class="contact-option calendly-trigger" data-tooltip="Termin buchen">
            <img src="https://cdn.prod.website-files.com/67bf7aa1075d0a8aedc77401/6839e175b75cd3da5e6c2ae3_calendar%20(1).png" 
                 alt="Kalender" class="contact-icon">
          </a>
        </div>
      </div>
    `;

    // Add CSS styles
    const styles = `
      <style>
        .floating-contact-popup {
          position: fixed;
          bottom: 1rem;
          left: 1rem;
          z-index: 1000;
          font-family: inherit;
        }

        .contact-popup-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .main-contact-button {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #41cc8a, #33b276);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 123, 255, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .main-contact-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 123, 255, 0.4);
        }

        .main-contact-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .main-contact-button:hover::before {
          opacity: 1;
        }

        .main-icon {
          width: 24px;
          height: 24px;
          filter: brightness(0) invert(1);
          transition: transform 0.3s ease;
        }

        .contact-popup-container.expanded .main-icon {
          transform: rotate(45deg);
        }

        .contact-text {
          position: absolute;
          left: 70px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 14px;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .contact-text::after {
          content: '';
          position: absolute;
          left: -5px;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-right-color: rgba(0, 0, 0, 0.8);
        }

        .main-contact-button:hover .contact-text {
          opacity: 1;
          transform: translateX(0);
        }

        .contact-options {
          position: absolute;
          bottom: 70px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }

        .contact-option {
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(20px) scale(0.8);
          position: relative;
        }

        .contact-option:hover {
          transform: translateY(-2px) scale(1.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .contact-option .contact-icon {
          width: 24px;
          height: 24px;
          transition: transform 0.3s ease;
        }

        .contact-option:hover .contact-icon {
          transform: scale(1.1);
        }

        /* Show options on hover/expanded state */
        .contact-popup-container:hover .contact-option,
        .contact-popup-container.expanded .contact-option {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Staggered animation delay for each option */
        .contact-option:nth-child(1) { transition-delay: 0.1s; }
        .contact-option:nth-child(2) { transition-delay: 0.15s; }
        .contact-option:nth-child(3) { transition-delay: 0.2s; }
        .contact-option:nth-child(4) { transition-delay: 0.25s; }

        /* Tooltip styles */
        .contact-option::before {
          content: attr(data-tooltip);
          position: absolute;
          left: 60px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 6px 10px;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .contact-option::after {
          content: '';
          position: absolute;
          left: 50px;
          top: 50%;
          transform: translateY(-50%);
          border: 4px solid transparent;
          border-right-color: rgba(0, 0, 0, 0.8);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .contact-option:hover::before,
        .contact-option:hover::after {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        .contact-option:hover::before {
          transform: translateX(0);
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .floating-contact-popup {
            bottom: 20px;
            left: 20px;
          }

          .main-contact-button {
            width: 55px;
            height: 55px;
          }

          .main-icon {
            width: 22px;
            height: 22px;
          }

          .contact-options {
            bottom: 65px;
          }

          .contact-option {
            width: 45px;
            height: 45px;
            z-index: 1001;
          }

          .contact-option .contact-icon {
            width: 20px;
            height: 20px;
          }

          /* Hide tooltips on mobile */
          .contact-text,
          .contact-option::before,
          .contact-option::after {
            display: none;
          }

          /* On mobile, disable hover and require click to expand */
          .contact-popup-container:hover .contact-option {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }

          .contact-popup-container.expanded .contact-option {
            opacity: 1;
            transform: translateY(0) scale(1);
            pointer-events: auto;
          }

          .contact-popup-container:not(.expanded) .contact-option {
            pointer-events: none;
          }

          /* Ensure main button is always clickable */
          .main-contact-button {
            z-index: 1002;
            position: relative;
          }

          /* Add background overlay when expanded */
          .contact-popup-container.expanded::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.1);
            z-index: 999;
            pointer-events: auto;
          }
        }

        /* Pulse animation for main button */
        @keyframes pulse {
          0% { box-shadow: 0 4px 20px rgba(0, 123, 255, 0.3); }
          50% { box-shadow: 0 4px 30px rgba(0, 123, 255, 0.5); }
          100% { box-shadow: 0 4px 20px rgba(0, 123, 255, 0.3); }
        }

        .main-contact-button {
          animation: pulse 3s infinite;
        }
      </style>
    `;

    // Add styles to head
    document.head.insertAdjacentHTML("beforeend", styles);

    return popup;
  };

  // Initialize the contact popup
  const initContactPopup = () => {
    // Create and append new popup
    const popup = createContactPopup();
    document.body.appendChild(popup);

    // Add event listeners
    const container = popup.querySelector(".contact-popup-container");
    const mainButton = popup.querySelector(".main-contact-button");
    const calendlyTrigger = popup.querySelector(".calendly-trigger");

    // Handle mobile/tablet click behavior
    let isExpanded = false;

    const toggleExpanded = (e: Event) => {
      if (window.innerWidth <= 820) {
        e.preventDefault();
        e.stopPropagation();
        isExpanded = !isExpanded;
        container?.classList.toggle("expanded", isExpanded);

        // Add haptic feedback on mobile if available
        if ("vibrate" in navigator) {
          navigator.vibrate(50);
        }
      }
    };

    // Use both click and touchend for better mobile support
    mainButton?.addEventListener("click", toggleExpanded);
    mainButton?.addEventListener("touchend", (e) => {
      e.preventDefault();
      toggleExpanded(e);
    });

    // Handle Calendly integration
    if (calendlyTrigger && window.Calendly) {
      calendlyTrigger.addEventListener("click", (e) => {
        e.preventDefault();
        window.Calendly?.initPopupWidget({
          url: "https://calendly.com/lulzim-1/30min",
        });
        // Close the popup after opening Calendly
        if (window.innerWidth <= 768) {
          isExpanded = false;
          container?.classList.remove("expanded");
        }
      });
    }

    // Close expanded state when clicking outside or on overlay
    document.addEventListener("click", (e) => {
      const target = e.target as Node;
      if (window.innerWidth <= 768 && isExpanded) {
        // Check if click is outside the popup or on the overlay
        if (
          !popup.contains(target) ||
          target === container?.querySelector("::before")
        ) {
          isExpanded = false;
          container?.classList.remove("expanded");
        }
      }
    });

    // Also handle touch events for better mobile support
    document.addEventListener("touchend", (e) => {
      const target = e.target as Node;
      if (window.innerWidth <= 768 && isExpanded && !popup.contains(target)) {
        isExpanded = false;
        container?.classList.remove("expanded");
      }
    });

    // Handle window resize
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && isExpanded) {
        isExpanded = false;
        container?.classList.remove("expanded");
      }
    });
  };

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initContactPopup);
  } else {
    initContactPopup();
  }
};
