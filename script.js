
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const carousel = document.querySelector(".carousel");
const slideCount = document.getElementById("slideCount");

let currentIndex = 0;
let autoRotate;
const intervalTime = 3000;

function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentIndex);
    });

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === currentIndex);

        if (i === currentIndex) {
            indicator.setAttribute("aria-current", "true");
        } else {
            indicator.removeAttribute("aria-current");
        }
    });

    slideCount.textContent =
        `${String(currentIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function previousSlide() {
    showSlide(currentIndex - 1);
}

function startAutoRotate() {
    stopAutoRotate();
    autoRotate = setInterval(nextSlide, intervalTime);
}

function stopAutoRotate() {
    clearInterval(autoRotate);
}

nextButton.addEventListener("click", () => {
    nextSlide();
    startAutoRotate();
});

previousButton.addEventListener("click", () => {
    previousSlide();
    startAutoRotate();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        showSlide(index);
        startAutoRotate();
    });
});

carousel.addEventListener("mouseenter", stopAutoRotate);
carousel.addEventListener("mouseleave", startAutoRotate);

carousel.addEventListener("focusin", stopAutoRotate);
carousel.addEventListener("focusout", event => {
    if (!carousel.contains(event.relatedTarget)) {
        startAutoRotate();
    }
});

showSlide(0);
startAutoRotate();
