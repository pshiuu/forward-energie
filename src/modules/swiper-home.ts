export const initSwiperHome = () => {
  console.log("🏠 Swiper Home Page - Initializing components");
  var swiperrev = new Swiper(".swiper.is-rev", {
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-btn.is-next",
      prevEl: ".swiper-btn.is-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
};
