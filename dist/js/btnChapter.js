const buttonProject = document.getElementById('buttonProject');
const buttonShow = document.getElementById('buttonShow');

let buttonShowOpen = false;

function btnShow() {
  buttonShow.addEventListener('click', () => {
    if (!buttonShowOpen) {
      buttonProject.classList.add('showProject');
      buttonShow.style.backgroundColor = "var(--bgSecondary)";
      buttonShow.style.color = "var(--white)";
      buttonShow.style.boxShadow = "0px 0px 3px var(--white)";
      buttonShowOpen = true;
    } else {
      buttonProject.classList.remove('showProject');
      buttonShow.style.color = "";
      buttonShow.style.backgroundColor = "";
      buttonShow.style.boxShadow = "none";
      buttonShowOpen = false;
    }
  })
}

btnShow()


const toggleButton = document.getElementById('toggleButton');
const toggleBtn = document.getElementById('toggleButtonBtn');

let toggleBtnShowOpen = false;

function togglebtn() {
  toggleBtn.addEventListener('click', () => {
    if (!toggleBtnShowOpen) {
      toggleButton.classList.add('showProject')
      toggleBtn.style.backgroundColor = "var(--bgSecondary)"
      toggleBtn.style.color = "var(--white)"
      toggleBtn.style.boxShadow = "0px 0px 3px var(--white)"
      toggleBtnShowOpen = true
    } else {
      toggleButton.classList.remove('showProject')
      toggleBtn.style.color = "var(--bgSecondary)"
      toggleBtn.style.backgroundColor = ""
      toggleBtnShowOpen = false;
    }
  })
}

togglebtn()


const toggleInputs = document.getElementById('toggleInputs');
const toggleInputShow = document.getElementById('toggleInputShow');

let toggleInputShowOpen = false;

function inputToggleShow() {
  toggleInputShow.addEventListener('click', () => {
    if (!toggleInputShowOpen) {
      toggleInputs.classList.add('showProject')
      toggleInputShow.style.backgroundColor = "var(--bgSecondary)"
      toggleInputShow.style.color = "var(--white)"
      toggleInputShow.style.boxShadow = "0px 0px 3px var(--white)"
      toggleInputShowOpen = true
    } else {
      toggleInputs.classList.remove('showProject')
      toggleInputShow.style.color = "var(--bgSecondary)"
      toggleInputShow.style.backgroundColor = ""
      toggleInputShowOpen = false;
    }
  })
}

inputToggleShow()


const burgerMenu = document.getElementById('burgerSection');
const burgerMenuBtn = document.getElementById('burger5')

let burger5ShowOpen = false;

function burger5() {
  burgerMenuBtn.addEventListener('click', () => {
    if(!burger5ShowOpen) {
      burgerMenu.classList.add('showProject')
      burgerMenuBtn.style.backgroundColor = "var(--bgSecondary)"
      burgerMenuBtn.style.color = "var(--white)"
      burgerMenuBtn.style.boxShadow = "0px 0px 3px var(--white)"
      burger5ShowOpen = true
    } else {
      burgerMenu.classList.remove('showProject')
      burgerMenuBtn.style.color = "var(--bgSecondary)"
      burgerMenuBtn.style.backgroundColor = ""
      burger5ShowOpen = false;
    } 
  })
}

burger5()


const oneButton = document.getElementById('btn');
const oneBtn = document.getElementById('oneBtn')

let oneBtnShowOpen = false;

function oneBtnFunc() {
  oneBtn.addEventListener('click', () => {
    if(!oneBtnShowOpen) {
      oneButton.classList.add('showProject')
      oneBtn.style.backgroundColor = "var(--bgSecondary)"
      oneBtn.style.color = "var(--white)"
      oneBtn.style.boxShadow = "0px 0px 3px var(--white)"
      oneBtnShowOpen = true
    } else {
      oneButton.classList.remove('showProject')
      oneBtn.style.color = "var(--bgSecondary)"
      oneBtn.style.backgroundColor = ""
      oneBtnShowOpen = false;
    } 
  })
}

oneBtnFunc()

