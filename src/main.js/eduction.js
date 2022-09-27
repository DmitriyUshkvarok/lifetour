var swiper = new Swiper(".eduction-slider", {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swipper--eduction-next",
    prevEl: ".swipper--eduction-prev",
  },
});
