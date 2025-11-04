// import './style.css'
import './styles/main.scss';

import './javascripts/navbar.js';
import './javascripts/slider.js';

AOS.init();


document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel')
    const slides = document.querySelectorAll('.carousel a')
    const nextBtn = document.querySelector('.next')
    const prevBtn = document.querySelector('.prev')
    let index = 0

    function showSlide() {
        carousel.style.transform = `translateX(-${index * 100}%)`
    }

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % slides.length
        showSlide()
    })

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length
        showSlide()
    })

});

