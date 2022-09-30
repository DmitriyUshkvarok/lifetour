var swiper = new Swiper('.eduction-slider', {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swipper--eduction-next',
    prevEl: '.swipper--eduction-prev',
  },
  breakpointsInverse: true,
  dynamicMainBullets: 6,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1100: {
      slidesPerView: 5,
      spaceBetween:10,
    },
  },
});
