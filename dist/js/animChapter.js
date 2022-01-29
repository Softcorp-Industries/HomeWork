const animProject = document.getElementById('animationProject');
const animBtnShow = document.getElementById('animationProjectBtn');

let animBtnShowOpen = false;

function animShow() {
    animBtnShow.addEventListener('click', () => {
        if(!animBtnShowOpen) {
            animProject.classList.add('showProject');
            animBtnShow.style.backgroundColor = 'var(--bgSecondary)';
            animBtnShow.style.color = "var(--white)";
            animBtnShow.style.boxShadow = '0px 0px 3px var(--white)';
            animBtnShowOpen = true;
        } else {
            animProject.classList.remove('showProject');
            animBtnShow.style.backgroundColor = "";
            animBtnShow.style.color = "var(--bgSecondary)";
            //animBtnShow.style.boxShadow = ('0px 0px 3px var(--white');
            
            animBtnShowOpen = false
        }
    })
}

animShow()

const transform = document.getElementById('transform');
const transformBtn = document.getElementById('transformBtn');

let transformBtnOn = false;

function transformShow() {
    transformBtn.addEventListener('click', () => {
        if (!transformBtnOn) {
            transform.classList.add('showProject');
            transformBtn.style.backgroundColor = 'var(--bgSecondary)'
            transformBtn.style.color = 'var(--white)';
            transformBtn.style.boxShadow = '0px 0px 3px var(--white)';
            transformBtnOn = true;
        } else {
            transform.classList.remove('showProject');
            transformBtn.style.backgroundColor = "";
            transformBtn.style.color =  'var(--bgSecondary)';
            transformBtnOn = false;
        }
    })
}

transformShow()


const ninjaHover = document.getElementById('ninjaHover');
const ninjaHoverBtn = document.getElementById('ninjaHoverBtn');

let ninjaHoverBtnOn = false;

function ninjaHoverShow() {
    ninjaHoverBtn.addEventListener('click', () => {
        if (!ninjaHoverBtnOn) {
            ninjaHover.classList.add('showProject');
            ninjaHoverBtn.style.backgroundColor = 'var(--bgSecondary)'
            ninjaHoverBtn.style.color = 'var(--white)';
            ninjaHoverBtn.style.boxShadow = '0px 0px 3px var(--white)';
            ninjaHoverBtnOn = true;
        } else {
            ninjaHover.classList.remove('showProject');
            ninjaHoverBtn.style.backgroundColor = "";
            ninjaHoverBtn.style.color =  'var(--bgSecondary)';
            ninjaHoverBtnOn = false;
        }
    })
}

ninjaHoverShow()


const flipMenu = document.getElementById('flipMenu');
const flipMenuBtn = document.getElementById('flipMenuBtn');

let flipMenuBtnOn = false;

function flipMenuShow() {
    flipMenuBtn.addEventListener('click', () => {
        if (!flipMenuBtnOn) {
            flipMenu.classList.add('showProject');
            flipMenuBtn.style.backgroundColor = 'var(--bgSecondary)'
            flipMenuBtn.style.color = 'var(--white)';
            flipMenuBtn.style.boxShadow = '0px 0px 3px var(--white)';
            flipMenuBtnOn = true;
        } else {
            flipMenu.classList.remove('showProject');
            flipMenuBtn.style.backgroundColor = "";
            flipMenuBtn.style.color =  'var(--bgSecondary)';
            flipMenuBtnOn = false;
        }
    })
}

flipMenuShow()


const canvas1 = document.getElementById('canvas1');
const canvas1Btn = document.getElementById('canvas1Btn');

let canvas1BtnOn = false;

function canvas1Show() {
    canvas1Btn.addEventListener('click', () => {
        if (!canvas1BtnOn) {
            canvas1.classList.add('showProject');
            canvas1Btn.style.backgroundColor = 'var(--bgSecondary)'
            canvas1Btn.style.color = 'var(--white)';
            canvas1Btn.style.boxShadow = '0px 0px 3px var(--white)';
            canvas1BtnOn = true;
        } else {
            canvas1.classList.remove('showProject');
            canvas1Btn.style.backgroundColor = "";
            canvas1Btn.style.color =  'var(--bgSecondary)';
            canvas1BtnOn = false;
        }
    })
}

canvas1Show()