// Type declaration for Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export const contactPopup = () => {
  // Global Calendly opener function
  const openCalendly = (url?: string) => {
    const calendlyUrl = url || "https://calendly.com/lulzim-1/30min";

    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      console.warn(
        "Calendly is not loaded yet. Please ensure Calendly script is included."
      );
      // Fallback: Open in new tab
      window.open(calendlyUrl, "_blank");
    }
  };

  // Global event listener for Calendly triggers
  const initGlobalCalendlyTriggers = () => {
    // Listen for clicks on elements with 'calendly-trigger' class
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      const calendlyButton = target.closest(
        ".calendly-trigger, .open-calendly, [data-calendly]"
      );

      if (calendlyButton) {
        e.preventDefault();
        e.stopPropagation();

        // Get custom URL if specified
        const customUrl = calendlyButton.getAttribute("data-calendly-url");
        openCalendly(customUrl);

        // Add visual feedback
        calendlyButton.classList.add("calendly-loading");
        setTimeout(() => {
          calendlyButton.classList.remove("calendly-loading");
        }, 1000);
      }
    });
  };

  // Create the main contact popup container
  const createContactPopup = () => {
    const popup = document.createElement("div");
    popup.className = "floating-contact-popup";
    popup.innerHTML = `
      <div class="contact-popup-container">
        <!-- Contact options (always visible) -->
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
          right: 1rem;
          z-index: 1000;
          font-family: inherit;
        }

        .contact-popup-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }


        .contact-options {
          position: static;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }

        .contact-option {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #41cc8a, #33b276);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(0, 123, 255, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 1;
          transform: translateY(0) scale(1);
          position: relative;
        }

        .contact-option:hover {
          transform: translateY(-2px) scale(1.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .contact-option .contact-icon {
          width: 20px;
          height: 20px;
          filter: brightness(0) invert(1);
          transition: transform 0.3s ease;
        }

        .contact-option:hover .contact-icon {
          transform: scale(1.1);
        }


        /* Tooltip styles */
        .contact-option::before {
          content: attr(data-tooltip);
          position: absolute;
          right: 60px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 6px 10px;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .contact-option::after {
          content: '';
          position: absolute;
          right: 50px;
          top: 50%;
          transform: translateY(-50%);
          border: 4px solid transparent;
          border-left-color: rgba(0, 0, 0, 0.8);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .contact-option:hover::before,
        .contact-option:hover::after {
          opacity: 1;
        }

        .contact-option:hover::before {
          transform: translateX(0);
        }

        .contact-option:hover::after {
          transform: translateY(-50%) translateX(0);
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .floating-contact-popup {
            bottom: 0.5rem;
            right: 0.5rem;
          }

          .contact-option {
            width: 45px;
            height: 45px;
          }

          .contact-option .contact-icon {
            width: 18px;
            height: 18px;
          }

          /* Hide tooltips on mobile */
          .contact-option::before,
          .contact-option::after {
            display: none;
          }
        }


        /* Global Calendly trigger styles */
        .calendly-trigger,
        .open-calendly,
        [data-calendly] {
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .calendly-trigger:hover,
        .open-calendly:hover,
        [data-calendly]:hover {
          transform: translateY(-1px);
        }

        .calendly-loading {
          pointer-events: none;
          opacity: 0.7;
        }

        .calendly-loading::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          margin: -10px 0 0 -10px;
          border: 2px solid #f3f3f3;
          border-top: 2px solid #3498db;
          border-radius: 50%;
          animation: calendly-spin 1s linear infinite;
        }

        @keyframes calendly-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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
  };

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initContactPopup();
      initGlobalCalendlyTriggers();
    });
  } else {
    initContactPopup();
    initGlobalCalendlyTriggers();
  }

  // Export the openCalendly function for manual use
  (window as any).openCalendly = openCalendly;
};
