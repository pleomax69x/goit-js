const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyRef = document.querySelector("body");
const startRef = document.querySelector('button[data-action="start"]');
const stoptRef = document.querySelector('button[data-action="stop"]');
let timerId = null;

startRef.addEventListener("click", startColor);
stoptRef.addEventListener("click", stopColor);

function startColor() {
  startRef.disabled = true;

  timerId = setInterval(() => {
    const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    bodyRef.style.backgroundColor = randomColor;    
  }, 1000);
}

function stopColor() {
  clearInterval(timerId);
  startRef.disabled = false;
}
