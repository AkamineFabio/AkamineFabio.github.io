const menuButton = document.querySelector('.header__button');
const menu = document.querySelector('.menu');
let isMenuOpen = false;

const skillBars = document.querySelectorAll('.skill__bar');
const skillPers = document.querySelectorAll('.bar__per');

menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

window.addEventListener('scroll', () => {
    console.log(`Screen position Y: ${window.scrollY}`);
    console.log(`Screen width: ${window.innerWidth}`);
    if (window.innerWidth <= 900) {
        if (window.scrollY <= 1700 || window.scrollY >= 3750) {
            for (let elements of skillBars) {
                elements.style.animation = 'none';
            }
            for (let elements of skillPers) {
                elements.style.animation = 'none';
            }
        } else {
            for (let elements of skillBars) {
                elements.style.animation = 'progress 2s ease-in-out forwards';
            }
            for (let elements of skillPers) {
                elements.style.animation = 'progress 2s ease-in-out forwards';
            }
        }
    }
    if (window.innerWidth > 900) {
        if (window.scrollY <= 1600 || window.scrollY >= 3170) {
            for (let elements of skillBars) {
                elements.style.animation = 'none';
            }
            for (let elements of skillPers) {
                elements.style.animation = 'none';
            }
        } else {
            for (let elements of skillBars) {
                elements.style.animation = 'progress 2s ease-in-out forwards';
            }
            for (let elements of skillPers) {
                elements.style.animation = 'progress 2s ease-in-out forwards';
            }
        }
    }
})