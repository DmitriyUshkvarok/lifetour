var swiper = new Swiper(".mySwiper", {
  effect: "flip",
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swipper--gallery-next",
    prevEl: ".swipper--gallery-prev",
  },
});
