import {location} from './location.js'

const locationCarousel = document.getElementById("locationCarousel");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

function createCarouselItem(location) {
    const slide = document.createElement("div");
    slide.classList.add("carousel-slide");

    const img = document.createElement("img");
    img.src = location.image;

    const title = document.createElement("div");
    title.classList.add("carousel-slide-title");
    title.textContent = location.title;

    const button = document.createElement("a");
    button.classList.add("carousel-slide-button");
    button.href = location.ctaLink;
    button.textContent = "Learn More";

    slide.appendChild(img);
    slide.appendChild(title);
    slide.appendChild(button);

    return slide;
}

location.forEach((locationData) => {
    const slide = createCarouselItem(locationData);
    locationCarousel.appendChild(slide);
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-slide");
    slides[currentIndex].classList.remove("active");
    slides[index].classList.add("active");
    currentIndex = index;
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + location.length) % location.length;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % location.length;
    showSlide(currentIndex);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

showSlide(currentIndex);

setInterval(() => {
    currentIndex = (currentIndex + 1) % location.length;
    showSlide(currentIndex);
}, 3000);
