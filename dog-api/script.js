const btn = document.querySelector("button");
const img = document.querySelector("img");
// btn.addEventListener("click", () => {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//       img.src = json.message;
//     });
// });

const xhr = new XMLHttpRequest();
console.log(xhr);

console.log(btn);
console.log(img);

xhr.responseType = "json";

// xhr.addEventListener("load", () => {
//   img.src = xhr.response.message;
// });

btn.addEventListener("click", () => {
  img.src = xhr.response.message;
  console.log(xhr.response);
});
xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
xhr.send();
