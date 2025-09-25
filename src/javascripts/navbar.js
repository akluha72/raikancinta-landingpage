const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');
const body = document.body;

// Function to open mobile nav
function openNav() {
    navLinks.classList.add('active');
    body.classList.add('nav-open');
}

// Function to close mobile nav
function closeNav() {
    navLinks.classList.remove('active');
    body.classList.remove('nav-open');
}

// Open nav when hamburger is clicked
hamburger.addEventListener('click', openNav);

// Close nav when close button is clicked
closeBtn.addEventListener('click', closeNav);

// Close nav when clicking on a link (optional - good UX)
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        closeNav();
    }
});

// Close nav when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        closeNav();
    }
});

// Scroll hide/reveal functionality
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.classList.remove("hidden");
        return;
    }

    if (currentScroll > lastScroll) {
        navbar.classList.add("hidden"); // scrolling down
    } else {
        navbar.classList.remove("hidden"); // scrolling up
    }

    lastScroll = currentScroll;
});