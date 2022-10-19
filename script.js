"use strict"

const seconds = 1000;  // 1 second
let initDuration = 3*seconds;
const animationDelay = 1.5*seconds;
const typed = document.querySelector("#typed");
const shape = document.querySelector("#shape");
const icons = [document.querySelector("#icon1"), document.querySelector("#icon2"), document.querySelector("#icon3")];
const titleText = ["an Engineer.", "a Designer.", "a Developer."];
const loopCSSColors = ["loop-color1", "loop-color2", "loop-color3"];

function deleteTextAnimation(txt) {
  txt.classList.replace("in", "out");
};

function typeTextAnimation(txt) {
  txt.classList.replace("out", "in");
};

function colorShift(item, color, i) {
  item.classList.replace(color[i-1], color[i]);
};

function textShift(newTxt) {
  typed.innerHTML = newTxt;
}

textShift(titleText[0]);

function animationLoop() {
  for (let i=1 ; i<=2 ; i++) {
    initDuration *= i;

    setTimeout( ()=> {deleteTextAnimation(typed)}, initDuration);

    setTimeout( ()=> {
      textShift(titleText[i]);
      colorShift(typed, loopCSSColors, i);
      colorShift(shape, loopCSSColors, i);
      colorShift(icons[0], loopCSSColors, i);
      colorShift(icons[1], loopCSSColors, i);
      colorShift(icons[2], loopCSSColors, i);
    }, initDuration + animationDelay);

    setTimeout( ()=> {typeTextAnimation(typed)}, initDuration + animationDelay + 0.1*seconds);

    initDuration += animationDelay;
  };
};

function fullAnimationLoop(loops) {
    animationLoop();
};