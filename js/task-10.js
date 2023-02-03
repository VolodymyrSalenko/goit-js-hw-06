
const inputEl = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const desstroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
desstroyBtn.addEventListener('click', destroyBoxes);


function createBoxes (amount) {
  amount = Number(inputEl.value);
  const items = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {

    const item = document.createElement('div');
    item.style.height = `${size}px`;
    item.style.width = `${size}px`;
    size += 10;
    item.style.backgroundColor = getRandomHexColor();

    items.push(item);
  }

  boxesEl.append(...items);
};

function destroyBoxes() { boxesEl.innerHTML = '' };

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};