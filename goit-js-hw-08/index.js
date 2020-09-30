import galleryItems from "./gallery-items.js";

const mainRef = document.querySelector(".js-gallery");
const lightBox = document.querySelector(".lightbox__image");
const modalWindow = document.querySelector(".js-lightbox");
const closeModal = document.querySelector('button[data-action="close-lightbox"]');
const backDropRef = document.querySelector(".lightbox__overlay");

mainRef.addEventListener("click", onGalleryClick);
closeModal.addEventListener("click", removeModal);
backDropRef.addEventListener("click", backDropClose);

// ==========================================================================
const createElement = (element) => {
  const liRef = document.createElement("li");
  const aRef = document.createElement("a");
  const imgRef = document.createElement("img");

  liRef.classList.add("gallery__item");
  aRef.classList.add("gallery__link");
  imgRef.classList.add("gallery__image");

  aRef.setAttribute("href", element.original);

  imgRef.setAttribute("src", element.preview);
  imgRef.setAttribute("data-source", element.original);
  imgRef.setAttribute("alt", element.description);

  liRef.appendChild(aRef);
  aRef.appendChild(imgRef);

  return liRef;
};
const galleryElements = galleryItems.map((element) => createElement(element));
mainRef.append(...galleryElements);
// ========================================================================

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const originalImgRef = event.target;

  const sourceUrl = originalImgRef.dataset.source;
  const sourceAlt = originalImgRef.getAttribute("alt");

  setLargeImgSrc(sourceUrl);
  setLargeImgAlt(sourceAlt);
  showModal();
}

function setLargeImgSrc(url) {
  lightBox.src = url;
}
function setLargeImgAlt(url) {
  lightBox.alt = url;
}
function showModal() {
  window.addEventListener("keydown", closeOnEscape);
  modalWindow.classList.add("is-open");
}
function removeModal() {
  window.removeEventListener("keydown", closeOnEscape);
  modalWindow.classList.remove("is-open");
  lightBox.src = "";
  lightBox.alt = "";
}
function backDropClose(event) {
  if (event.target === event.currentTarget) {
    removeModal();
  }
}
function closeOnEscape(event) {
  if (event.code === "Escape") {
    removeModal();
  }
}