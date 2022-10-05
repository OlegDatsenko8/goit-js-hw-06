function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector(`body`);
const buttonEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

buttonEl.addEventListener("click", (event) => {
  const Random = getRandomHexColor();
  bodyEl.style.backgroundColor = Random;
  colorEl.textContent = Random;
  console.log(getRandomHexColor());
});
