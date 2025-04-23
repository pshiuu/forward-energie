import { initEnergyPriceChart } from "../energyPriceChart";
import { initSwiperHome } from "../swiper-home";
import { initFAQ } from "../faq";

export const initHome = () => {
  console.log("🏠 Home Page - Initializing components");
  initEnergyPriceChart();
  initSwiperHome();
  initFAQ();
};
