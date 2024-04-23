const menuButton = document.querySelector('.header__button');
const menu = document.querySelector('.menu');
let isMenuOpen = false;

const allFlipCards = document.querySelectorAll('.flipcard');
const allFlipClickMe = document.querySelectorAll('.flipcard__clickme');

let hasTouchScreen = false;
let isFlipped = false;

if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
    hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
    var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
    if (mQ && mQ.media === "(pointer:coarse)") {
        hasTouchScreen = !!mQ.matches;
    } else if ('orientation' in window) {
        hasTouchScreen = true; // deprecated, but good fallback
    } else {
        // Only as a last resort, fall back to user agent sniffing
        var UA = navigator.userAgent;
        hasTouchScreen = (
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
        );
    }
}

if (hasTouchScreen) {
    for (let flip of allFlipCards) {
        flip.addEventListener('click', () => {
            isFlipped = !isFlipped;
            if (isFlipped) {
                console.log(isFlipped);
                flip.children[0].style.transform = 'rotateY(180deg)';
            } else {
                flip.children[0].style.transform = 'rotateY(0deg)';
            }
        });

    }

    for (let flips of allFlipClickMe) {
        flips.innerText = 'Click Me!';
    }
}


menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});
