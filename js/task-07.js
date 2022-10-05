const inputtextRef = document.querySelector("#text");
const inputsizeRef = document.querySelector("#font-size-control");

inputsizeRef.addEventListener("input", (event) => {
  inputtextRef.style.fontSize = `${inputsizeRef.value}px`;
});
