const webPlayerProject = document.getElementById('webPlayerProject');
const webPlayerBtn = document.getElementById('webPlayerProjectBtn');

let webPlayerShowOpen = false;

function webPlayerShow() {
  webPlayerBtn.addEventListener('click', () => {
    if (!webPlayerShowOpen) {
      webPlayerProject.classList.add('showProject')
      webPlayerBtn.style.backgroundColor = "var(--bgSecondary)"
      webPlayerBtn.style.color = "var(--white)"
      webPlayerBtn.style.boxShadow = "0px 0px 3px var(--white)"
      webPlayerShowOpen = true
    } else {
      webPlayerProject.classList.remove('showProject')
      webPlayerBtn.style.color = "var(--bgSecondary)"
      webPlayerBtn.style.backgroundColor = ""
      webPlayerShowOpen = false;
    }
  })
}

webPlayerShow()


const basicAudioPlayer = document.getElementById('basicAudioPlayer');
const basicAudioPlayerBtn = document.getElementById('basicAudioPlayerBtn');

let basicAudioPlayerShowOpen = false;

function audioPlayerShow() {
  basicAudioPlayerBtn.addEventListener('click', () => {
    if (!basicAudioPlayerShowOpen) {
      basicAudioPlayer.classList.add('showProject')
      basicAudioPlayerBtn.style.backgroundColor = "var(--bgSecondary)"
      basicAudioPlayerBtn.style.color = "var(--white)"
      basicAudioPlayerBtn.style.boxShadow = "0px 0px 3px var(--white)"
      basicAudioPlayerShowOpen = true
    } else {
      basicAudioPlayer.classList.remove('showProject')
      basicAudioPlayerBtn.style.color = "var(--bgSecondary)"
      basicAudioPlayerBtn.style.backgroundColor = ""
      basicAudioPlayerShowOpen = false;
    }
  })
}

audioPlayerShow()


const webPlayerV1 = document.getElementById('webPlayerV1');
const webPlayerV1Btn = document.getElementById('webPlayerV1Btn');

let webPlayerV1ShowOpen = false;

function webPlayerV1Show() {
  webPlayerV1Btn.addEventListener('click', () => {
    if (!webPlayerV1ShowOpen) {
      webPlayerV1.classList.add('showProject')
      webPlayerV1Btn.style.backgroundColor = "var(--bgSecondary)"
      webPlayerV1Btn.style.color = "var(--white)"
      webPlayerV1Btn.style.boxShadow = "0px 0px 3px var(--white)"
      webPlayerV1ShowOpen = true
    } else {
      webPlayerV1.classList.remove('showProject')
      webPlayerV1Btn.style.color = "var(--bgSecondary)"
      webPlayerV1Btn.style.backgroundColor = ""
      webPlayerV1ShowOpen = false;
    }
  })
}

webPlayerV1Show()


const audioLibrary = document.getElementById('audioLibrary');
const audioLibraryBtn = document.getElementById('audioLibraryBtn');

let audioLibraryShowOpen = false;

function audioLibraryShow() {
  audioLibraryBtn.addEventListener('click', () => {
    if (!audioLibraryShowOpen) {
      audioLibrary.classList.add('showProject')
      audioLibraryBtn.style.backgroundColor = "var(--bgSecondary)"
      audioLibraryBtn.style.color = "var(--white)"
      audioLibraryBtn.style.boxShadow = "0px 0px 3px var(--white)"
      audioLibraryShowOpen = true
    } else {
      audioLibrary.classList.remove('showProject')
      audioLibraryBtn.style.color = "var(--bgSecondary)"
      audioLibraryBtn.style.backgroundColor = ""
      audioLibraryShowOpen = false;
    }
  })
}

audioLibraryShow()


const videoPlayerV1 = document.getElementById('videoPlayerV1');
const videoPlayerV1Btn = document.getElementById('videoPlayerV1Btn');

let videoPlayerV1ShowOpen = false;

function videoPlayerV1Show() {
  videoPlayerV1Btn.addEventListener('click', () => {
    if (!videoPlayerV1ShowOpen) {
      videoPlayerV1.classList.add('showProject')
      videoPlayerV1Btn.style.backgroundColor = "var(--bgSecondary)"
      videoPlayerV1Btn.style.color = "var(--white)"
      videoPlayerV1Btn.style.boxShadow = "0px 0px 3px var(--white)"
      videoPlayerV1ShowOpen = true
    } else {
      videoPlayerV1.classList.remove('showProject')
      videoPlayerV1Btn.style.color = "var(--bgSecondary)"
      videoPlayerV1Btn.style.backgroundColor = ""
      videoPlayerV1ShowOpen = false;
    }
  })
}

videoPlayerV1Show()