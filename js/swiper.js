(() => {
  const wrapper = document.querySelector(".mySwiper .swiper-wrapper");
  const slides = document.querySelectorAll(".mySwiper .swiper-slide");
  const next = document.querySelector(".swiper-button-next");
  const prev = document.querySelector(".swiper-button-prev");
  if (!wrapper || !slides.length || !next || !prev) return;

  let i = 0;
  const update = () => {
    wrapper.style.transform = `translateX(-${i * 100}%)`;
  };

  next.addEventListener("click", () => {
    i = (i + 1) % slides.length;
    update();
  });
  prev.addEventListener("click", () => {
    i = (i - 1 + slides.length) % slides.length;
    update();
  });

  update();
})();