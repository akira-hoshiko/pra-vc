let currentSlide = 0;
const slider = document.querySelector('.slider');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
  if (index < 0) index = 0;
  if (index >= totalSlides) index = totalSlides - 1;
  
  currentSlide = index;
  slider.style.transform = `translateX(-${index * 100}vw)`;
}

// Controle por clique
document.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

// Controle por arrastar (mobile)
let startX = 0;

document.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    showSlide(currentSlide + 1);
  } else if (endX - startX > 50) {
    showSlide(currentSlide - 1);
  }
});