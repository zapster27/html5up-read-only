let currentSlideIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slider-track img");
  const dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentSlideIndex = index;
  }

  // Auto slide (optional)
  setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  }, 4000);

  // Dot click
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });

  // Show initial
  showSlide(currentSlideIndex);
});