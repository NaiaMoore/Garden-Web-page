'use strict'
// Burger-menu mobile

const primaryNav = document.querySelector('.nav-list');
const burgerMenu = document.querySelector('.burger-mobile');

burgerMenu.addEventListener('click', () =>{
const visibility = primaryNav.getAttribute('data-visible');
if(visibility === 'false'){
  primaryNav.setAttribute('data-visible', true);
  burgerMenu.setAttribute('aria-expanded', true)
}else if(visibility === 'true'){
  primaryNav.setAttribute('data-visible', false);
  burgerMenu.setAttribute('aria-expanded', false)

};
});


// скролл на услуги

document.querySelector('.welcome-btn').addEventListener('click', function () {
  const target = document.querySelector("#" + this.dataset.target);
  const offset = 30;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});

// слайдер opinion

const sliderContainer = document.querySelector('.opinion-slider');
const slider = document.querySelector('.opinion-slider__line');
const sliderCard = document.querySelectorAll('.slider-card');
const nextBtn = document.querySelector('.slider-button__next');
const prevBtn = document.querySelector('.slider-button__prev ');
let currentSlide = 0;


function updateSlider() {
const sliderWidth = sliderCard[0].clientWidth
sliderContainer.scrollLeft = currentSlide * sliderWidth;

if(currentSlide === 0){
  prevBtn.classList.toggle('slider-button--nonactive')
}else{
  prevBtn.classList.remove('slider-button--nonactive')
};

if(currentSlide === sliderCard.length - 1){
  nextBtn.classList.toggle('slider-button--nonactive')
}else{
  nextBtn.classList.remove('slider-button--nonactive')
};

};


nextBtn.addEventListener('click', () =>{
  if(currentSlide < sliderCard.length - 1){
    currentSlide++
    updateSlider()
  }
})
prevBtn.addEventListener('click', () =>{
  if(currentSlide > 0){
    currentSlide--
    updateSlider()
  }
})






