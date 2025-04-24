import { initEnergyPriceChart } from "../energyPriceChart";
import { initSwiperHome } from "../swiper-home";
import { initFAQ } from "../faq";
import { pulsating } from "../animations/pulsating";

export const initHome = () => {
  console.log("🏠 Home Page - Initializing components");
  initEnergyPriceChart();
  initSwiperHome();
  initFAQ();
  pulsating();
};
