const UpBtn = document.querySelectorAll("Button")[1];
console.log(UpBtn);
const DawnBtn = document.querySelectorAll("Button")[0];
console.log(DawnBtn);

let counterValue = 0;
UpBtn.addEventListener(`click`, (event) => {
  counterValue += 1;
  const ValueEl = document.querySelector(`span`);
  ValueEl.textContent = counterValue;
});
DawnBtn.addEventListener(`click`, (event) => {
  counterValue = counterValue - 1;
  const ValueEl = document.querySelector(`span`);
  ValueEl.textContent = counterValue;
});
