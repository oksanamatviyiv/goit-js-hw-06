const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]; 

const pickerIngredients = document.querySelector('ul');

const nameEl = (ingredient) => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  console.log(ingredientEl);

  return ingredientEl;
};
pickerIngredients.append(...ingredients.map(nameEl));