var swiper = new Swiper('.review-slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swipper--review-next',
    prevEl: '.swipper--review-prev',
  },
  breakpointsInverse: true,
  dynamicMainBullets: 6,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    600: {
      slidesPerView: 2,
    },

    1000: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
