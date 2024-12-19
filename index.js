const butLeft = document.querySelector(".button__left");
const butRigth = document.querySelector(".button__rigth");
const slider = document.querySelectorAll(".slider__item");

const arrSlider = Array.from(slider);
let currentElement = 0;

function removeSlide() {
  arrSlider[currentElement].classList.add("anim-2");
  arrSlider[currentElement].classList.remove("slider__item-active");
}

function addSlide() {
  arrSlider[currentElement].classList.add("slider__item-active");
  arrSlider[currentElement].classList.add("anim-2");
}

butRigth.addEventListener("click", () => {
  removeSlide();
  currentElement += 1;
  if (currentElement === arrSlider.length) {
    currentElement = 0;
  }
  addSlide();
});

butLeft.addEventListener("click", () => {
  removeSlide();
  currentElement -= 1;
  if (currentElement < 0) {
    currentElement = arrSlider.length - 1;
  }
  addSlide();
});
