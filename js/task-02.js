const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  const listOfIngredients = ingredients.map(ingredient => {

  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  
  return itemEl;

});

const listIngredienstEl = document.getElementById('ingredients');
listIngredienstEl.append(...listOfIngredients);