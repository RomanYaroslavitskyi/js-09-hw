import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getRefs } from './getRefs';

const { firstDelay, stepDelay, amountEl, formEl } = getRefs();

formEl.addEventListener('submit', onSubmitBtn);

function onSubmitBtn(e) {
  e.preventDefault();
  let delayTime = Number(firstDelay.value);

  for (let i = 1; i <= amountEl.value; i += 1) {
    createPromise(i, delayTime)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayTime += Number(stepDelay.value);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
