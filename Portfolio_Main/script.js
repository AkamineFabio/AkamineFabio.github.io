const menuButton = document.querySelector('.header__button');
const menu = document.querySelector('.menu');
let isMenuOpen = false;

menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});