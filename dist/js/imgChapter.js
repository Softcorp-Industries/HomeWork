const imgProject = document.getElementById('imgProject');
const imgBtnShow = document.getElementById('imgShow');

let imgBtnShowOpen = false;

function imgShow() {
    imgBtnShow.addEventListener('click', () => {
        if(!imgBtnShowOpen) {
            imgProject.classList.add('showProject');
            imgBtnShow.style.backgroundColor = "var(--bgSecondary)";
            imgBtnShow.style.color = "var(--white)";
            imgBtnShow.style.boxShadow = '0px 0px 3px var(--white)';
            imgBtnShowOpen = true;
        } else {
            imgProject.classList.remove('showProject');
            imgBtnShow.style.backgroundColor = "";
            imgBtnShow.style.color = "var(--bgSecondary)";
            imgBtnShow.style.boxShadow = 'none';
            imgBtnShowOpen = false
        }
    })
}

imgShow()

const imgCarousel = document.getElementById('imgCarousel');
const imgCarouselBtn = document.getElementById('carouselShow');
let carouselShowOpen = false;
function carouselShow() {
  imgCarouselBtn.addEventListener("click", () => {
    if (!carouselShowOpen) {
      imgCarousel.classList.add("showProject");
      imgCarouselBtn.style.backgroundColor = "var(--bgSecondary)";
      imgCarouselBtn.style.color = "var(--white)";
      imgCarouselBtn.style.boxShadow = "0px 0px 3px var(--white)"
      carouselShowOpen = true;
    } else {
      imgCarousel.classList.remove("showProject");
      imgCarouselBtn.style.backgroundColor = "";
      imgCarouselBtn.style.color = "var(--bgSecondary)"
      carouselShowOpen = false;
    }
  });
}
carouselShow()

const productGallery = document.getElementById('imgProductGallery');
const productGalleryBtn = document.getElementById('imgProductGalleryShow');

let productGalleryBtnShowOpen = false;

function productGalleryShow() {
    productGalleryBtn.addEventListener('click', () => {
        if(!productGalleryBtnShowOpen) {
            productGallery.classList.add('showProject')
            productGalleryBtn.style.backgroundColor = "var(--bgSecondary)";
            productGalleryBtn.style.color = "var(--white)";
            productGalleryBtn.style.boxShadow = "0px 0px 3px var(--white)";
            productGalleryBtnShowOpen = true;
        } else {
            productGallery.classList.remove('showProject');
            productGalleryBtn.style.backgroundColor = "";
            productGalleryBtn.style.color = "var(--bgSecondary)";
            productGalleryBtnShowOpen = false;
        }

    })
}

productGalleryShow()

const imgGallery = document.getElementById('imgGallery');
const imgGalleryBtn = document.getElementById('imgGalleryShow');

let imgGalleryShowOpen = false;

function imgGalleryShow() {
    imgGalleryBtn.addEventListener('click', () => {
        if(!imgGalleryShowOpen) {
            imgGallery.classList.add('showProject');
            imgGalleryBtn.style.backgroundColor = "var(--bgSecondary";
            imgGalleryBtn.style.color = 'var(--white)';
            imgGalleryBtn.style.boxShadow = '0px 0px 3px var(--white)';
            imgGalleryShowOpen = true;
        } else {
            imgGallery.classList.remove('showProject');
            imgGalleryBtn.style.backgroundColor = "";
            imgGalleryBtn.style.color = "var(--bgSecondary"
            imgGalleryShowOpen = false;
        }
    })
}

imgGalleryShow()

const imgSlider = document.getElementById('imgSlider');
const imgSliderShowBtn = document.getElementById('imgSliderShow');

let imgSliderShowOpen = false;

function imgSliderShow() {
imgSliderShowBtn.addEventListener('click', () => {
    if(!imgSliderShowOpen) {
        imgSlider.classList.add('showProject');
        imgSliderShowBtn.style.backgroundColor = "var(--bgSecondary)";
        imgSliderShowBtn.style.color = "var(--white)";
        imgSliderShowBtn.style.boxShadow = "0px 0px 3px var(--white)";
        imgSliderShowOpen = true;
    } else {
        imgSlider.classList.remove('showProject');
        imgSliderShowBtn.style.backgroundColor = "";
        imgSliderShowBtn.style.color = "var(--bgSecondary)";
        imgSliderShowOpen = false;
    }
})
}

imgSliderShow()