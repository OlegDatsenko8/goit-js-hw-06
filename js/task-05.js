const input = document.querySelector("#validation-input");
input.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == input.dataset.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    console.log(input);
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
    console.log(input);
  }
});
