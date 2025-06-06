import { onReady } from "@xatom/core";
import { initRoutes } from "./routes";
import { initPageLoader } from "./modules/animations/pageloader";
import { pulsating } from "./modules/animations/pulsating";
import { initNavLogoScrollAnimation } from "./modules/animations/home-animation";
import { contactPopup } from "./modules/contact-popup";

onReady(() => {
  initRoutes();
  pulsating();
  initNavLogoScrollAnimation();
  contactPopup();
  const loader = initPageLoader();
});
