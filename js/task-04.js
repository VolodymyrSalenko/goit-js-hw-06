
let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener("click", onBtnClick);
incrementBtn.addEventListener("click", onBtnClick);

function onBtnClick () {
  const number = Number(this.textContent);
  counterValue += number;
  document.getElementById('value').textContent = counterValue;
};