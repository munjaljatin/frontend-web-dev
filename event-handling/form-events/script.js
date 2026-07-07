const userName = document.querySelector("#username");
const form = document.querySelector("form");
form.style.backgroundColor = "lightpink";

userName.addEventListener("input", (event) => {});

// userName.addEventListener("change", (e) => {
//   const para = document.createElement("p");
//   para.innerText = e.target.value;
//   document.body.appendChild(para);
//   console.log(e);
// });

// userName.addEventListener("focus", (e) => {
//   console.log(e);
// });

// userName.addEventListener("blur", (e) => {
//   console.log(e);
// });

form.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event.target);
  console.log(event.type);
});

console.log(form);

const heading = document.querySelector("h1");
console.log(heading);
heading.addEventListener("keypress", (event) => {
  console.log(event.key);
});
