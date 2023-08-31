const scrollContainer = document.querySelectorAll('.scroll__anim');
const apresentacao = document.querySelector('.apresentacao');
const sobremim = document.querySelector('.sobremim');
const habilidades = document.querySelector('.habilidades');

window.sr = ScrollReveal({ reset: true });

for (let i of scrollContainer) {
    i.classList.add('hidden');
}

sr.reveal(apresentacao, { duration: 2000 });
sr.reveal(sobremim, { duration: 2000 });
sr.reveal(habilidades, { duration: 2000 });

/* window.addEventListener('scroll', () => {
    if (!habilidades.checkVisibility()) {
        console.log('invisivel');
        for (let elements of skillBars) {
            elements.style.animation = 'none';
        }
        for (let elements of skillPers) {
            elements.style.animation = 'none';
        }
        return;
    }

    if (habilidades.checkVisibility()) {
        console.log('visivel');
        for (let elements of skillBars) {
            elements.classList.add('skill__show-anim');
            elements.style.animation = 'progress 2s ease-in-out forwards';
        }
        for (let elements of skillPers) {
            elements.classList.add('skill__show-anim');
            elements.style.animation = 'progress 2s ease-in-out forwards';
        }
        return;
    }
}) */



