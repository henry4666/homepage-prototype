"use strict"

const seconds = 1000;  // 1 second
let initDuration = 3*seconds;
const animationDelay = 1.5*seconds;
const typed = document.querySelector("#typed");

function deleteTextAnimation(txt) {
  txt.classList.replace("in", "out");
};

function typeTextAnimation(txt) {  
  txt.classList.replace("out", "in");
};

function animationLoop() {
  for (let i=1 ; i<=2 ; i++) {
    initDuration *= i;

    setTimeout( ()=> {deleteTextAnimation(typed)}, initDuration);
    setTimeout( ()=> {console.log("text change")}, initDuration + animationDelay);  // text replace and color change function
    setTimeout( ()=> {typeTextAnimation(typed)}, initDuration + animationDelay + 0.1*seconds);

    initDuration += animationDelay;
  };
};
``
function fullAnimationLoop(loops) {
    animationLoop();
};