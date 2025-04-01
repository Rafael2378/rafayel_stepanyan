const nav = document.querySelector('.nav');
const burgerButton = document.querySelector('.burger-button');

burgerButton.addEventListener('click', () => {
    nav.classList.toggle('nav_active');
});

new Swiper('.portfolio__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 3,
        },
    }
});

function translate(language) { 
    const elements = document.querySelectorAll('[data-' + language + ']'); 
    elements.forEach((element) => { 
        element.textContent = element.getAttribute('data-' + language); 
    }); 
} 
 
function changeLanguage(language) { 
    translate(language); 
} 
 
changeLanguage('en'); 