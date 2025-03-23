let currentIndex = 0;
const totalSlides = 3;

window.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("sliderTrack");
  const dots = document.querySelectorAll(".slider-dots .dot");

  function goToSlide(index) {
    currentIndex = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
  }

  function updateDots() {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
  }

  // Set up click events for dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => goToSlide(index));
  });

  // Start automatic sliding
  setInterval(autoSlide, 4000);

  // Initialize first dot as active
  goToSlide(0);
});
