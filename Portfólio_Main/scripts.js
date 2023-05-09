
/* MENU HAMBURGER */
const menuHamb = document.querySelector('.menuHamb__lista');
const menuHambIcon = document.querySelector('.menuHamb__container');
const screenWidth = window.screen.width;
let turnMenuHambOn = false;


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



