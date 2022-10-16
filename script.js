"use strict"

const typed = document.querySelector("#typed");

function deleteTextAnimation(txt) {
  txt.classList.replace("in", "out");
};

function typeTextAnimation(txt) {  
  txt.classList.replace("out", "in");
};

function fullAnimation(txt) {
  const seconds = 1000;  // 1 second
  let initDuration = 3*seconds;


  setTimeout(deleteTextAnimation(txt), initDuration);
  setTimeout("", initDuration + 1.5*seconds);  // text replace and color change function
  setTimeout(typeTextAnimation(txt), initDuration + 1.6*seconds);
}