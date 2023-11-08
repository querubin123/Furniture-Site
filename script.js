// JavaScript for the main carousel
const carousel = document.querySelector(".carousel");
const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
    const offset = -index * 100;
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(${offset}%)`;
    requestAnimationFrame(() => {
        carousel.style.transition = "transform 0.4s ease-in-out";
        carousel.style.transform = `translateX(${offset}%)`;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Automatic slide every 3 seconds
setInterval(nextSlide, 3000);

// JavaScript for the secondary carousel
const carousel1 = document.querySelector(".carousel1");
const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex1 = 0;

function showSlide1(index) {
    const offset = -index * 100 + "%";
    carousel1.style.transform = `translateX(${offset})`;
}

function nextSlide1() {
    currentIndex1 = (currentIndex1 + 1) % carouselItems.length;
    showSlide1(currentIndex1);
}

function prevSlide1() {
    currentIndex1 = (currentIndex1 - 1 + carouselItems.length) % carouselItems.length;
    showSlide1(currentIndex1);
}

// Automatic slide every 3 seconds (adjust the interval as needed)
setInterval(nextSlide1, 3000);
