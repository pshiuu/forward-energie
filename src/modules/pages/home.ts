import { initEnergyPriceChart } from "../energyPriceChart";
import { initSwiperHome } from "../swiper-home";
import { initFAQ } from "../faq";
import { gridPulse } from "../animations/gird-pulse";

export const initHome = () => {
  console.log("🏠 Home Page - Initializing components");
  initEnergyPriceChart();
  initSwiperHome();
  initFAQ();
  gridPulse();
};
