let currentIndex = 0;

function changeCarousel() {
    const carouselImages = document.querySelector('.carousel-images');
    currentIndex = (currentIndex + 1) % 3; // Cycle through 3 images
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatically change the carousel every 3 seconds
setInterval(changeCarousel, 3000);
