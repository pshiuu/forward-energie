import { onReady } from "@xatom/core";
import { initRoutes } from "./routes";
import { initPageLoader } from "./modules/animations/pageloader";
import { pulsating } from "./modules/animations/pulsating";
import { initNavLogoScrollAnimation } from "./modules/animations/home-animation";

onReady(() => {
  initRoutes();
  pulsating();
  initNavLogoScrollAnimation();
  const loader = initPageLoader();
});
