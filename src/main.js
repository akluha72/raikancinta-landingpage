// import './style.css'
import './styles/main.scss';

import './javascripts/navbar.js';
import './javascripts/slider.js';

AOS.init();

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    // Set initial height
    if (item.classList.contains('is-open')) {
        answer.style.height = answer.scrollHeight + 'px';
    } else {
        answer.style.height = '0';
    }

    btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        if (isOpen) {
            answer.style.height = answer.scrollHeight + 'px'; // pin before collapsing
            requestAnimationFrame(() => { answer.style.height = '0'; });
            item.classList.remove('is-open');
            btn.setAttribute('aria-expanded', 'false');
        } else {
            item.classList.add('is-open');
            answer.style.height = answer.scrollHeight + 'px';
            btn.setAttribute('aria-expanded', 'true');
        }
    });
});

// Demo modal
const modal = document.getElementById('demoModal');
const modalImg = modal.querySelector('.demo-modal__img');
const modalBtn = document.getElementById('modalSampleBtn');
const modalLeft = modal.querySelector('.demo-modal__left');
const closeBtn = modal.querySelector('.demo-modal__close');
const backdrop = modal.querySelector('.demo-modal__backdrop');

document.querySelectorAll('.design-card').forEach(card => {
    card.addEventListener('click', () => {
        modalImg.src = card.dataset.img;
        modalImg.alt = card.dataset.name || '';
        modalLeft.style.backgroundColor = card.dataset.bg || '#c98420';
        modalBtn.href = card.dataset.link || '#';
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});

