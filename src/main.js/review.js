var swiper = new Swiper(".review-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swipper--review-next",
    prevEl: ".swipper--review-prev",
  },
});
