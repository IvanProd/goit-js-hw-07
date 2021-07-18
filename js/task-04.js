const counter = document.querySelector("#counter");
const decrease = counter.querySelector("button[data-action=decrement]");
const increase = counter.querySelector("button[data-action=increment]");
const number = counter.querySelector("#value");

let counterValue = Number(number.textContent);

const decrement = function (event) {
    counterValue -= 1;
    number.textContent = counterValue;
  }

const increment = function (event) {
    counterValue += 1;
    number.textContent = counterValue;
  }

decrease.addEventListener("click", decrement);
increase.addEventListener("click", increment);



