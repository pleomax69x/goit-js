const daysRef = document.querySelector('span[data-value="days"]')
const hoursRef = document.querySelector('span[data-value="hours"]');
const minssRef = document.querySelector('span[data-value="mins"]');
const secssRef = document.querySelector('span[data-value="secs"]');

const targetDate = new Date('Jul 17, 2021');

const timerId = setInterval(() =>{
  const currentDate = Date.now();  
  const deltaTime = targetDate - currentDate;

  updateClock(deltaTime);
}, 1000);

function updateClock(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
 
  daysRef.textContent = `${days}`;
  hoursRef.textContent = `${hours}`;
  minssRef.textContent = `${mins}`;
  secssRef.textContent = `${secs}`;
};

function pad(value){
    return String(value).padStart(2, '0');
}