import { WFRoute } from "@xatom/core";
import { initHome } from "../modules/pages/home";

export const initRoutes = () => {
  new WFRoute("/").execute(() => {
    initHome();
  });
};
