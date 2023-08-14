const scrollContainer = document.querySelectorAll('.scroll__anim');
const apresentacao = document.querySelector('.apresentacao');
const sobremim = document.querySelector('.sobremim');
const habilidades = document.querySelector('.habilidades');


const skillBars = document.querySelectorAll('.skill__bar');
const skillPers = document.querySelectorAll('.bar__per');

window.sr = ScrollReveal({ reset: true });

for (let i of scrollContainer) {
    i.classList.add('hidden');
}

sr.reveal(apresentacao, { duration: 2000 });
sr.reveal(sobremim, { duration: 2000 });
sr.reveal(habilidades, { duration: 2000 });


if (habilidades.checkVisibility()) {
    for (let elements of skillBars) {
        elements.classList.add('skill__show-anim');
    }
    for (let elements of skillPers) {
        elements.classList.add('skill__show-anim');
    }
}

