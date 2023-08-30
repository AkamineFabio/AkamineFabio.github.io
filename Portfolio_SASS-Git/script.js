const menuButton = document.querySelector('.header__menu-btn');
const menuBackground = document.querySelector('.menu__background');
const iconClose = document.querySelector('.icon__close');
const menu = document.querySelector('.menu');
let isMenuActive = false;

menuButton.addEventListener('click', () => {
    isMenuActive = !isMenuActive;
    console.log('clicou');
    if (isMenuActive) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
});

menuBackground.addEventListener('click', () => {
    isMenuActive = false;
    menu.style.display = 'none';
});

iconClose.addEventListener('click', () => {
    isMenuActive = false;
    menu.style.display = 'none';
});

window.addEventListener('resize', () => {
    console.log(window.screen.width);
    if (window.screen.width >= 900) {
        isMenuActive = false;
        menu.style.display = 'none';
    }
})