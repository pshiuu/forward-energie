import { onReady } from "@xatom/core";
import { initRoutes } from "./routes";
import { initPageLoader } from "./modules/animations/pageloader";
import { pulsating } from "./modules/animations/pulsating";

onReady(() => {
  initRoutes();
  pulsating();
  const loader = initPageLoader();
});
