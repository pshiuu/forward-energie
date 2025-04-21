import { onReady } from "@xatom/core";
import { helloWorldRoutes } from "./routes";

onReady(() => {
  // Initialize routes which includes energy price chart initialization
  helloWorldRoutes();
});
