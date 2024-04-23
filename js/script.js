// Hamburger Menu

const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');

hamburgerEl.addEventListener('click', () => {
    navEl.classList.toggle('nav--open');
    hamburgerEl.classList.toggle('hamburger--open');
});
navEl.addEventListener('click', () => {
    navEl.classList.remove('nav--open');
    hamburgerEl.classList.remove('hamburger--open');
});


// Nav link active state on scroll
const navLinkEls = document.querySelectorAll('.nav__link');
const sectionEls = document.querySelectorAll('.section');


window.addEventListener('scroll', () => {
    let currentSection = 'home';
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= (sectionEl.offsetTop)) {
            currentSection = sectionEl.id;
        }
    });
    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            navLinkEl.classList.add('active');
        }
    });
});
