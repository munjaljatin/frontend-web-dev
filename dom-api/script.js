// Random Number Generator
function randomNumberGenerator(maxValue) {
  return Math.floor(Math.random() * maxValue);
  // console.log(random);
}

const heading2 = document.getElementsByClassName("heading2");
// console.log(heading2);
heading2.innerHTML = "Hello";
// console.log(heading2);

const btn = document.getElementById("color");
console.log(btn);
btn.innerHTML = "Change Color";

btn.addEventListener("click", () => {
  // btn.style.color = "red";
  btn.style.backgroundColor = "lightblue";
});

const div = document.getElementsByClassName("bg-black");
// div.style.padding = "10px";
// window.onload = () => {
//   // creating a couple of elements inside the div tag
//   const mainHeading = document.createElement("h1");
//   const headingText = document.createTextNode("Heading Inside the div tag");
//   mainHeading.appendChild(headingText);
//   div.appendChild(mainHeading);
// };

const divHeading = document.getElementById("h2-in-div");
// divHeading = document.createTextNode("Text Node");
divHeading.innerHTML = "Render the Heading";

// setInterval(randomNumberGenerator(50), 1000);
// setTimeout(randomNumberGenerator(100), 5000);

divHeading.setAttribute("id", "main-heading");
console.log(divHeading.getAttribute("id"));
console.log(divHeading.getAttribute("class"));

function changeStyleHeading() {
  // div.style.padding = "10px";
  divHeading.style.border = "2px solid red";
  divHeading.style.padding = "15px";
  divHeading.style.borderRadius = "25px";
}

function calculateSum() {
  const firstNumber = document.getElementById("num1");
  const secondNumber = document.getElementById("num2");

  const val1 = firstNumber.value;
  const val2 = secondNumber.value;

  const result = document.getElementById("result");

  const sum = parseInt(val1) + parseInt(val2);
  // result.innerHTML(sum);
  const p = document.createElement("p");
  p.innerHTML = sum;
  result.appendChild(p);
}

console.log(document.querySelector('input[type="password"]'));

// querySelector
const list = document.querySelector("#list");
console.log(list);

const listItems = list.querySelectorAll("li");
console.log(listItems);

function changeListColor() {
  listItems.forEach(function executor(l) {
    l.style.padding = `${randomNumberGenerator(25)}px`;
    l.style.backgroundColor = `rgb(${randomNumberGenerator(
      255
    )}, ${randomNumberGenerator(255)}, ${randomNumberGenerator(255)})`;
    l.style.color = `rgb(${randomNumberGenerator(255)}, ${randomNumberGenerator(
      255
    )}, ${randomNumberGenerator(255)})`;
  });
}

// changeListColor();
function changeSectionColor() {
  const section = document.querySelector(".node");
  section.style.backgroundColor = `rgb(${randomNumberGenerator(
    255
  )}, ${randomNumberGenerator(255)}, ${randomNumberGenerator(255)})`;
}
