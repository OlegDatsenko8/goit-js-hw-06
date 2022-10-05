const itemCategoriesEl = document.querySelector(`#categories`);

const liofCategories = itemCategoriesEl.querySelectorAll(`li.item`);
console.log(`Namber of Categories:`, liofCategories.length);

liofCategories.forEach((element) => {
  const h2Ref = element.querySelector(`h2`);
  const elements = element.querySelectorAll(`li`);

  console.log(`Categories:`, h2Ref.textContent);
  console.log(`Elements:`, elements.length);
});
