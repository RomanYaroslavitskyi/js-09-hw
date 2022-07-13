const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startButton.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1500);
  startButton.disabled = true;
});

stopButton.addEventListener('click', () => {
  clearInterval(timerId);
  startButton.disabled = false;
});
