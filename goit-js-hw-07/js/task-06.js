"use strict";

const nameInput = document.querySelector("#validation-input");

const validation = () => {
  if (nameInput.value.length === +nameInput.dataset.length) {
    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");
  } else {
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
  }
};

nameInput.addEventListener("blur", validation);
