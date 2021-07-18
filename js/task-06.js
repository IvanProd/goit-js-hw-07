
const inputCheck = document.querySelector("#validation-input");
const inputLength = Number(inputCheck.dataset.length);
console.log(inputLength);

const validateInput = (event) => {
  if (event.target.value.length !== inputLength) {
    inputCheck.classList.add("invalid") ||
      inputCheck.classList.replace("valid", "invalid");
  } else
    inputCheck.classList.add("valid") ||
      inputCheck.classList.replace("invalid", "valid");
};

inputCheck.addEventListener("blur", validateInput);