// ===============================
// HERO IMAGE SLIDER
// ===============================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

// Show Selected Slide
function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

// Next Slide
function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

// Auto Slider
setInterval(nextSlide, 5000);

// Dot Navigation
dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;
        showSlide(currentSlide);

    });

});

// Keyboard Navigation
document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {

        nextSlide();

    }

    if (e.key === "ArrowLeft") {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);

    }

});

// Pause Slider on Hover
const hero = document.querySelector(".hero");

let sliderInterval = setInterval(nextSlide, 5000);

hero.addEventListener("mouseenter", () => {
    clearInterval(sliderInterval);
});

hero.addEventListener("mouseleave", () => {
    sliderInterval = setInterval(nextSlide, 5000);
});

// Initial Slide
showSlide(currentSlide);