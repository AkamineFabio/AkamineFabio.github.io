<<<<<<< HEAD

/* MENU HAMBURGER */
const menuHamb = document.querySelector('.menuHamb__lista');
const menuHambIcon = document.querySelector('.menuHamb__container');
const screenWidth = window.screen.width;
let turnMenuHambOn = false;

/* SCROLL REVEAL */
const presentation = document.querySelector('.presentation');
const main = document.querySelector('.main');
const aprendizado = document.querySelector('.aprendizado');
window.sr = ScrollReveal({reset:true});
const timer = 2500;

menuHambIcon.addEventListener('click', ()=>{
    turnMenuHambOn = !turnMenuHambOn;
    console.log(turnMenuHambOn);
    if(turnMenuHambOn){
        menuHamb.style.display = 'block';
        console.log('ON');
    } else {
        menuHamb.style.display = 'none';
        console.log('OFF');
    }
});

if(turnMenuHambOn){
    menuHamb.style.display = 'block';
    console.log('ON');
} else {
    menuHamb.style.display = 'none';
    console.log('OFF');
}


window.addEventListener('resize', ()=>{
    if(screenWidth > 900){
        turnMenuHambOn = false;
        menuHamb.style.display = 'none';
        console.log('OFF');
    }
});

presentation.classList.add('hasJS');
main.classList.add('hasJS');
aprendizado.classList.add('hasJS');
projetos.classList.add('hasJS');

sr.reveal(presentation , {duration:timer});
sr.reveal(main , {duration:timer});
sr.reveal(aprendizado , {duration:timer});
=======

/* MENU HAMBURGER */
const menuHamb = document.querySelector('.menuHamb__lista');
const menuHambIcon = document.querySelector('.menuHamb__container');
const screenWidth = window.screen.width;
let turnMenuHambOn = false;

/* SCROLL REVEAL */
const presentation = document.querySelector('.presentation');
const main = document.querySelector('.main');
const aprendizado = document.querySelector('.aprendizado');
const projetos = document.querySelector('.projetos');
window.sr = ScrollReveal({reset:true});
const timer = 2500;

menuHambIcon.addEventListener('click', ()=>{
    turnMenuHambOn = !turnMenuHambOn;
    console.log(turnMenuHambOn);
    if(turnMenuHambOn){
        menuHamb.style.display = 'block';
        console.log('ON');
    } else {
        menuHamb.style.display = 'none';
        console.log('OFF');
    }
});

if(turnMenuHambOn){
    menuHamb.style.display = 'block';
    console.log('ON');
} else {
    menuHamb.style.display = 'none';
    console.log('OFF');
}


window.addEventListener('resize', ()=>{
    if(screenWidth > 900){
        turnMenuHambOn = false;
        menuHamb.style.display = 'none';
        console.log('OFF');
    }
});

presentation.classList.add('hasJS');
main.classList.add('hasJS');
aprendizado.classList.add('hasJS');
projetos.classList.add('hasJS');

sr.reveal(presentation , {duration:timer});
sr.reveal(main , {duration:timer});
sr.reveal(aprendizado , {duration:timer});
sr.reveal(projetos , {duration:timer});
>>>>>>> c79a819e0cefac7e0423672a14be55d1a0d7ab12
