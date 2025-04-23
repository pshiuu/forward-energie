import { WFRoute } from "@xatom/core";
import { initHome } from "../modules/pages/home";
export const helloWorldRoutes = () => {
  new WFRoute("/").execute(() => {
    initHome();
  });
};
