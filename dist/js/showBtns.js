//alert('fuck you');
function enableShowProjectsBtn(e) {
  e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.add('showProject');
}
function disableShowProjectsBtn(e) {
  e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('showProject');
}
//  Projects Button
const buttonShow = document.getElementById('buttonShow');
const imgBtnShow = document.getElementById('imgShow');
const animBtnShow = document.getElementById('animationProjectBtn');
const storageProjectBtn = document.getElementById('storageProjectBtn');
const webPlayerBtn = document.getElementById('webPlayerProjectBtn');

let buttonShowOpen = false;
let imgBtnShowOpen = false;
let animBtnShowOpen = false;
let storageBtnShowOpen = false;
let webPlayerShowOpen = false;

function showButtonProjects() {
  buttonShow.addEventListener('click', (e) => {
    if (!buttonShowOpen) {
      enableShowProjectsBtn(e);
      buttonShowOpen = true;
    } else {
      disableShowProjectsBtn(e);
      buttonShowOpen = false;
    }
  })
}
function showImgProjects() {
  imgBtnShow.addEventListener('click', (e) => {
    if (!imgBtnShowOpen) {
      enableShowProjectsBtn(e);
      imgBtnShowOpen = true;
    } else {
      disableShowProjectsBtn(e);
      imgBtnShowOpen = false
    }
  })
}
function showAnimProjects() {
  animBtnShow.addEventListener('click', (e) => {
    if (!animBtnShowOpen) {
      enableShowProjectsBtn(e);
      animBtnShowOpen = true;
    } else {
      disableShowProjectsBtn(e);
      animBtnShowOpen = false;
    }
  })
}
function showStorageProjects() {
  storageProjectBtn.addEventListener('click', (e) => {
    if (!storageBtnShowOpen) {
      enableShowProjectsBtn(e);
      storageBtnShowOpen = true;
    } else {
      disableShowProjectsBtn(e);
      storageBtnShowOpen = false
    }
  })
}
function showWebPlayerProjects() {
  webPlayerBtn.addEventListener('click', (e) => {
    if (!webPlayerShowOpen) {
      enableShowProjectsBtn(e);
      webPlayerShowOpen = true
    } else {
      disableShowProjectsBtn(e);
      webPlayerShowOpen = false;
    }
  })
}
showButtonProjects();
showImgProjects();
showAnimProjects();
showStorageProjects();
showWebPlayerProjects();

//  Project Button
function enableShowProjectBtn(e) {
  //console.log(e.target.parentElement.parentElement.parentElement.nextElementSibling);
  e.target.parentElement.parentElement.parentElement.nextElementSibling.classList.add('showProject');
  //buttonShow.style.backgroundColor = "var(--secondaryClr)";
  //buttonShow.style.color = "var(--secondaryTxt)";
}
function disableShowProjectBtn(e) {
  //console.log(e.target);
  e.target.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('showProject');
  //buttonShow.style.color = "var(--secondaryClr)";
  //buttonShow.style.backgroundColor = "";
}

//  Button Projects
const toggleBtn = document.getElementById('toggleButtonBtn');
const toggleInputShow = document.getElementById('toggleInputShow');
const burgerMenuBtn = document.getElementById('burger5');
const oneBtn = document.getElementById('oneBtn');

let toggleBtnShowOpen = false;
let toggleInputShowOpen = false;
let burger5ShowOpen = false;
let oneBtnShowOpen = false;

function showToggleBtnsProject() {
  toggleBtn.addEventListener('click', (e) => {
    if (!toggleBtnShowOpen) {
      enableShowProjectBtn(e);
      toggleBtnShowOpen = true
    } else {
      disableShowProjectBtn(e);
      toggleBtnShowOpen = false;
    }
  })
}
function showInputToggleProject() {
  toggleInputShow.addEventListener('click', (e) => {
    if (!toggleInputShowOpen) {
      enableShowProjectBtn(e);
      toggleInputShowOpen = true
    } else {
      disableShowProjectBtn(e);
      toggleInputShowOpen = false;
    }
  })
}
function show5BurgerProject() {
  burgerMenuBtn.addEventListener('click', (e) => {
    if (!burger5ShowOpen) {
      enableShowProjectBtn(e);
      burger5ShowOpen = true
    } else {
      disableShowProjectBtn(e);
      burger5ShowOpen = false;
    }
  })
}
function showOneBtnProject() {
  oneBtn.addEventListener('click', (e) => {
    if (!oneBtnShowOpen) {
      enableShowProjectBtn(e);
      oneBtnShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      oneBtnShowOpen = false;
    }
  })
}

showToggleBtnsProject();
showInputToggleProject();
show5BurgerProject();
showOneBtnProject();

// Image Projects
const imgCarouselBtn = document.getElementById('carouselShow');
const productGalleryBtn = document.getElementById('imgProductGalleryShow');
const imgGalleryBtn = document.getElementById('imgGalleryShow');
const imgSliderShowBtn = document.getElementById('imgSliderShow');

let carouselShowOpen = false;
let productGalleryBtnShowOpen = false;
let imgGalleryShowOpen = false;
let imgSliderShowOpen = false;

function showCarouselProject() {
  imgCarouselBtn.addEventListener("click", (e) => {
    if (!carouselShowOpen) {
      enableShowProjectBtn(e);
      carouselShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      carouselShowOpen = false;
    }
  });
}
function showProductGalleryProject() {
  productGalleryBtn.addEventListener('click', (e) => {
    if (!productGalleryBtnShowOpen) {
      enableShowProjectBtn(e);
      productGalleryBtnShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      productGalleryBtnShowOpen = false;
    }
  })
}
function showImgGalleryProject() {
  imgGalleryBtn.addEventListener('click', (e) => {
    if (!imgGalleryShowOpen) {
      enableShowProjectBtn(e);
      imgGalleryShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      imgGalleryShowOpen = false;
    }
  })
}
function showImgSliderProject() {
  imgSliderShowBtn.addEventListener('click', () => {
    if (!imgSliderShowOpen) {
      enableShowProjectBtn();
      imgSliderShowOpen = true;
    } else {
      disableShowProjectBtn();
      imgSliderShowOpen = false;
    }
  })
}

showCarouselProject();
showProductGalleryProject();
showImgGalleryProject();
showImgSliderProject();

// Animation Projects
const transformBtn = document.getElementById('transformBtn');
const ninjaHoverBtn = document.getElementById('ninjaHoverBtn');
const flipMenuBtn = document.getElementById('flipMenuBtn');
const canvas1Btn = document.getElementById('canvas1Btn');

let transformBtnOn = false;
let ninjaHoverBtnOn = false;
let flipMenuBtnOn = false;
let canvas1BtnOn = false;

function showTransformProject() {
  transformBtn.addEventListener('click', (e) => {
    if (!transformBtnOn) {
      enableShowProjectBtn(e);
      transformBtnOn = true;
    } else {
      disableShowProjectBtn(e);
      transformBtnOn = false;
    }
  })
}
function showNinjaHoverProject() {
  ninjaHoverBtn.addEventListener('click', (e) => {
    if (!ninjaHoverBtnOn) {
      enableShowProjectBtn(e);
      ninjaHoverBtnOn = true;
    } else {
      disableShowProjectBtn(e);
      ninjaHoverBtnOn = false;
    }
  })
}
function showFlipMenuProject() {
  flipMenuBtn.addEventListener('click', (e) => {
    if (!flipMenuBtnOn) {
      enableShowProjectBtn(e);
      flipMenuBtnOn = true;
    } else {
      disableShowProjectBtn(e);
      flipMenuBtnOn = false;
    }
  })
}
function showCanvas1Project() {
  canvas1Btn.addEventListener('click', (e) => {
    if (!canvas1BtnOn) {
      enableShowProjectBtn(e);
      canvas1BtnOn = true;
    } else {
      disableShowProjectBtn(e);
      canvas1BtnOn = false;
    }
  })
}

showTransformProject();
showNinjaHoverProject();
showFlipMenuProject();
showCanvas1Project();

// Storage Projects
const todoList1Btn = document.getElementById('toDoList1Btn');

let todoList1BtnShowOpen = false;

function showTodoList1() {
  todoList1Btn.addEventListener('click', (e) => {
    if (!todoList1BtnShowOpen) {
      enableShowProjectBtn(e);
      todoList1BtnShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      todoList1BtnShowOpen = false
    }
  })
}

showTodoList1();

// Web Player Projects
const basicAudioPlayerBtn = document.getElementById('basicAudioPlayerBtn');
const audioPlayerV1Btn = document.getElementById('webPlayerV1Btn');
const audioLibraryBtn = document.getElementById('audioLibraryBtn');
const videoPlayerV1Btn = document.getElementById('videoPlayerV1Btn');

let basicAudioPlayerShowOpen = false;
let webPlayerV1ShowOpen = false;
let audioLibraryShowOpen = false;
let videoPlayerV1ShowOpen = false;

function showBasicAudioPlayerProject() {
  basicAudioPlayerBtn.addEventListener('click', (e) => {
    if (!basicAudioPlayerShowOpen) {
      enableShowProjectBtn(e);
      basicAudioPlayerShowOpen = true
    } else {
      disableShowProjectBtn(e);
      basicAudioPlayerShowOpen = false;
    }
  })
}
function showAudioPlayerV1Project() {
  audioPlayerV1Btn.addEventListener('click', (e) => {
    if (!webPlayerV1ShowOpen) {
      enableShowProjectBtn(e);
      webPlayerV1ShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      webPlayerV1ShowOpen = false;
    }
  })
}
function showAudioLibraryProject() {
  audioLibraryBtn.addEventListener('click', (e) => {
    if (!audioLibraryShowOpen) {
      enableShowProjectBtn(e);
      audioLibraryShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      audioLibraryShowOpen = false;
    }
  })
}
function showVideoPlayerV1Project() {
  videoPlayerV1Btn.addEventListener('click', (e) => {
    if (!videoPlayerV1ShowOpen) {
      //videoPlayerV1.classList.add('showProject')
      //videoPlayerV1Btn.style.backgroundColor = "var(--bgSecondary)"
      //videoPlayerV1Btn.style.color = "var(--white)"
      //videoPlayerV1Btn.style.boxShadow = "0px 0px 3px var(--white)"
      enableShowProjectBtn(e);
      videoPlayerV1ShowOpen = true;
    } else {
      //videoPlayerV1.classList.remove('showProject')
      //videoPlayerV1Btn.style.color = "var(--bgSecondary)"
      //videoPlayerV1Btn.style.backgroundColor = ""
      disableShowProjectBtn(e);
      videoPlayerV1ShowOpen = false;
    }
  })
}

showBasicAudioPlayerProject();
showAudioPlayerV1Project();
showAudioLibraryProject();
showVideoPlayerV1Project();