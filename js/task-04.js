
let counterValue = 0;
document.getElementById('value').textContent = counterValue;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

console.log(+(decrementBtn.textContent));


decrementBtn.addEventListener("click", onBtnClick);
incrementBtn.addEventListener("click", onBtnClick);

function onBtnClick () {
  const number = +(this.textContent);
  counterValue += number;
  document.getElementById('value').textContent = counterValue;
};





// Створи змінну counterValue, в якій буде зберігатися поточне значення
//лічильника та ініціалізуй її значенням 0.

// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй
//значення лічильника.

// Оновлюй інтерфейс новим значенням змінної counterValue.