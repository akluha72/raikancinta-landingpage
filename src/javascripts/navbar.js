// alert("something happens");

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        // always show when at the very top
        navbar.classList.remove("hidden");
        return;
    }

    if (currentScroll > lastScroll) {
        // scrolling down
        navbar.classList.add("hidden");
    } else {
        // scrolling up
        navbar.classList.remove("hidden");
    }

    lastScroll = currentScroll;
});