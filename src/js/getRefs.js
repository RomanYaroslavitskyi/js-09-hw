export const getRefs = () => {
  return {
    startBtn: document.querySelector('button[data-start]'),
    inputEl: document.querySelector('#datetime-picker'),
    daysEl: document.querySelector('span[data-days]'),
    hoursEl: document.querySelector('span[data-hours]'),
    minutesEl: document.querySelector('span[data-minutes]'),
    secondsEl: document.querySelector('span[data-seconds]'),
    firstDelay: document.querySelector('input[name="delay"]'),
    stepDelay: document.querySelector('input[name="step"]'),
    amountEl: document.querySelector('input[name="amount"]'),
    formEl: document.querySelector('form'),
  };
};
