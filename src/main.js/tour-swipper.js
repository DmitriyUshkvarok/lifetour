var swiper = new Swiper('.tour-slide', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swipper--tour-next',
    prevEl: '.swipper--tour-prev',
  },
  breakpointsInverse: true,
  dynamicMainBullets: 6,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    485: {
      slidesPerView: 2,
    },

    800: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
