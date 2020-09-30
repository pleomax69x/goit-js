"use strict";

const control = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

const changeText = () => {
  outputText.style.fontSize = control.value + "px";
};

control.addEventListener("input", changeText);
