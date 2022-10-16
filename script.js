"use strict"

const typed = document.querySelector("#typed");

function deleteTextAnimation(txt) {
  txt.classList.replace("in", "out");
};

function typeTextAnimation(txt) {  
  txt.classList.replace("out", "in");
};

// setTimeout(typing(), 6000);