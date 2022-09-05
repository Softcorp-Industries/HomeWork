//alert('fuck You');

const readMoreBtn = document.getElementById('readMoreBtn');

let readMoreOpen = false;


function enableReadMore(e) {
  console.log(e.target.parentElement.previousElementSibling);
  e.target.parentElement.previousElementSibling.style.display = 'block';
  e.target.parentElement.previousElementSibling.classList.add('readMoreAnim')
  e.target.parentElement.previousElementSibling.classList.remove('readMoreAnimRev')
  //e.target.parentElement.previousElementSibling.classList.remove('hiddenContent')
  e.target.innerHTML = 'Read Less';
}
function disableReadMore(e) {
  e.target.parentElement.previousElementSibling.classList.remove('readMoreAnim')
  e.target.parentElement.previousElementSibling.classList.add('readMoreAnimRev')
  //e.target.parentElement.previousElementSibling.classList.add('hiddenContent')
  e.target.parentElement.previousElementSibling.style.display = 'none'
  e.target.innerHTML = 'Read More';
  readMoreBtn.style.display = 'block';
}
function readMore() {
  document.addEventListener('DOMContentLoaded', () => {
    readMoreBtn.addEventListener('click', (e) => {
      if (!readMoreOpen) {
        enableReadMore(e);
        readMoreOpen = true;
      } else {
        disableReadMore(e);
        readMoreOpen = false;
      }
    })
  })
}
readMore();
