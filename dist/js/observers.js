/*  observe Images  */

/*  select images with data-src attribute   */
const images = document.querySelectorAll('[data-src]');

/*  sets when the observer fires */
const imgOptions = {
    thrshold: 0,
    rootMargin: "0px 0px 500px 0px"
}

/*  seperate function outside of the observer   */
function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if(!src) {
        return;
    }
    img.src = src;
}

/*  creates the observer    */
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);

})