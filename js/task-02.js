const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector(`#ingredients`);

const MyIngredients = (ingredients) => {
  return ingredients.map((ingredient) => {
    const elementRef = document.createElement(`li`);
    elementRef.textContent = ingredient;
    elementRef.classList.add(`items`);
    return elementRef;
  });
};

const items = MyIngredients(ingredients);
ingredientsRef.append(...items);
console.log(ingredientsRef);
