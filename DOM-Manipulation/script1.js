// querySelector
// this selector performs the operation on the first element
const div = document.querySelector("div");
div.innerHTML = "<h1> This is h1 Tag. </h1>";
console.log(div.innerHTML);

// const code = document.querySelector("code");
// code.innerHTML = alert("hello");

function randomNumber(number) {
  return Math.floor(Math.random() * (number + 1));
}

function randomNumber1(number) {
  return Math.floor(Math.random() * (number + 1));
}

setInterval(() => {
  const randomColor = `rgb(${randomNumber(255)}, ${randomNumber(
    255
  )}, ${randomNumber(255)})`;
  const randomColor2 = `rgb(${randomNumber1(255)}, ${randomNumber1(
    255
  )}, ${randomNumber1(255)})`;
  document.body.style.backgroundColor = randomColor;
  document.body.style.color = randomColor2;
  console.log(randomColor, randomColor2);
}, 10000000);

// div manipulation

const flex = document.getElementById("flex");
// console.log(flex);

flex.style.display = "flex";

const btn = document.querySelector("button");
console.log(btn);

// btn.addEventListener("click", function () {
//   document.body.style.fontSize = "100px";
// });

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#141129";
  document.body.style.color = "#fff";
});

btn.style.padding = "10px";
btn.style.borderRadius = "25px";
btn.style.border = "1px solid grey";
btn.style.backgroundColor = "lightgreen";

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
  alert("You are hacked");
});
