"use strict"

const seconds = 1000;  // 1 second
let initDuration = 3*seconds;
const animationDelay = 1.5*seconds;
const typed = document.querySelector("#typed");
const shape = document.querySelector("#shape");
const titleText = ["Engineer.", "Designer.", "Developer."];
const loopCSSColors = ["loop-color1", "loop-color2", "loop-color3"];

function deleteTextAnimation(txt) {
  txt.classList.replace("in", "out");
};

function typeTextAnimation(txt) {
  txt.classList.replace("out", "in");
};

function colorShift(txt, circle, color, i) {
  txt.classList.replace(color[i-1], color[i]);
  circle.classList.replace(color[i-1], color[i]);
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
      colorShift(typed, shape, loopCSSColors, i);
    }, initDuration + animationDelay);

    setTimeout( ()=> {typeTextAnimation(typed)}, initDuration + animationDelay + 0.1*seconds);

    initDuration += animationDelay;
  };
};

function fullAnimationLoop(loops) {
    animationLoop();
};