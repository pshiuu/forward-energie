import { WFRoute } from "@xatom/core";
import { initEnergyPriceChart } from "../modules/energyPriceChart";

export const helloWorldRoutes = () => {
  new WFRoute("/").execute(() => {
    // Initialize energy price chart for the home page
    initEnergyPriceChart();
  });
};
