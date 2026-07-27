// ================================
// CIRCULAR CAROUSEL
// ================================

const circleItems = document.querySelectorAll(".circle-item");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let angle = 0;
const radius = 180;

function arrangeCarousel() {

    const step = (2 * Math.PI) / circleItems.length;

    circleItems.forEach((item, index) => {

        const currentAngle = angle + index * step;

        const x = Math.cos(currentAngle) * radius;
        const y = Math.sin(currentAngle) * radius;

        item.style.left = `${200 + x}px`;
        item.style.top = `${200 + y}px`;

        // Scale and opacity for pseudo-3D effect
        const scale = (y + radius) / (2 * radius);

        item.style.transform = `translate(-50%, -50%) scale(${0.6 + scale * 0.6})`;

        item.style.opacity = 0.5 + scale * 0.5;

        item.style.zIndex = Math.round(scale * 100);

        item.classList.remove("active");

    });

    // Find the front image
    let frontIndex = 0;
    let highest = -9999;

    circleItems.forEach((item, index) => {

        const top = parseFloat(item.style.top);

        if (top > highest) {

            highest = top;
            frontIndex = index;

        }

    });

    circleItems[frontIndex].classList.add("active");

}

arrangeCarousel();

nextBtn.addEventListener("click", () => {

    angle += (2 * Math.PI) / circleItems.length;

    arrangeCarousel();

});

prevBtn.addEventListener("click", () => {

    angle -= (2 * Math.PI) / circleItems.length;

    arrangeCarousel();

});

// Auto Rotate

setInterval(() => {

    angle += (2 * Math.PI) / circleItems.length;

    arrangeCarousel();

}, 3000);

// ================================
// CAROUSEL IMAGE ENLARGE
// ================================

const carouselItems = document.querySelectorAll(".circle-item");

carouselItems.forEach((img) => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = img.src;

    });

});

// ================================
// LIGHTBOX
// ================================

const galleryImages = document.querySelectorAll(".image-card img");

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const closeBtn = document.querySelector(".close");

const lightPrev = document.querySelector(".light-prev");

const lightNext = document.querySelector(".light-next");

let currentImage = 0;

galleryImages.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentImage = index;

        lightbox.style.display = "flex";

        lightboxImage.src = img.src;

    });

});

closeBtn.onclick = () => {

    lightbox.style.display = "none";

};

lightNext.onclick = () => {

    currentImage++;

    if (currentImage >= galleryImages.length)
        currentImage = 0;

    lightboxImage.src = galleryImages[currentImage].src;

};

lightPrev.onclick = () => {

    currentImage--;

    if (currentImage < 0)
        currentImage = galleryImages.length - 1;

    lightboxImage.src = galleryImages[currentImage].src;

};

lightbox.addEventListener("click", e => {

    if (e.target === lightbox)

        lightbox.style.display = "none";

});



// ================================
// KEYBOARD
// ================================

document.addEventListener("keydown", e => {

    if (lightbox.style.display === "flex") {

        if (e.key === "ArrowRight")
            lightNext.click();

        if (e.key === "ArrowLeft")
            lightPrev.click();

        if (e.key === "Escape")
            lightbox.style.display = "none";

    }

});



// ================================
// CATEGORY FILTER
// ================================

const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(category => {

    category.addEventListener("click", () => {

        const filter = category.dataset.filter;

        document.querySelectorAll(".image-card").forEach(card => {

            const img = card.querySelector("img");

            if (filter === "all" || img.dataset.category === filter) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});



// ================================
// SEARCH
// ================================

const search = document.getElementById("search");

search.addEventListener("keyup", () => {

    const value = search.value.toLowerCase();

    document.querySelectorAll(".image-card").forEach(card => {

        const text = card.querySelector(".image-text").textContent.toLowerCase();

        if (text.includes(value))

            card.style.display = "block";

        else

            card.style.display = "none";

    });

});



// ================================
// DARK MODE
// ================================

document.getElementById("darkMode").addEventListener("click", () => {

    document.body.classList.toggle("dark");

});



// ================================
// SCROLL TO TOP
// ================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    topBtn.style.display = window.scrollY > 400 ? "block" : "none";

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};



// ================================
// ACTIVE NAVIGATION
// ================================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});