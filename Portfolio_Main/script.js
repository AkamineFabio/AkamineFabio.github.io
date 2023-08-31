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
    /*     console.log(`Screen position Y: ${window.scrollY}`);
        console.log(`Screen width: ${window.innerWidth}`); */
    if (window.innerWidth <= 500) {
        if (window.scrollY <= 1980 || window.scrollY >= 4000) {
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
    } else if (window.innerWidth > 500 && window.innerWidth <= 800) {
        if (window.scrollY <= 1550 || window.scrollY >= 3900) {
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
    } else if (window.innerWidth > 800 && window.innerWidth <= 900) {
        if (window.scrollY <= 1720 || window.scrollY >= 4020) {
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
    } else if (window.innerWidth > 900 && window.innerWidth <= 1200) {
        if (window.scrollY <= 1660 || window.scrollY >= 3230) {
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
    } else if (window.innerWidth > 1200 && window.innerWidth <= 1400) {
        if (window.scrollY <= 1615 || window.scrollY >= 3180) {
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
    } else if (window.innerWidth > 1400) {
        if (window.scrollY <= 1380 || window.scrollY >= 2960) {
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