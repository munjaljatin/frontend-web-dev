const container = document.querySelector(".image-container");
console.log(container);
const image = document.querySelector("img");
console.log(image);
// console.dir(image);

const imageElement = document.createElement("img");
imageElement.setAttribute(
  "src",
  "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/10.png"
);
const newImageContainer = document.querySelector(".new-image-container");
newImageContainer.style.border = "2px solid red";
console.log(newImageContainer);
newImageContainer.appendChild(imageElement);

for (let i = 2; i < 1001; i = i + 10) {
  const newImage = image.cloneNode();
  newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`;
  container.append(newImage);
}

// for (let i = 3; i < 10000; i + 30) {
//   const newImage2 = imageElement.cloneNode();
//   newImage2.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`;
//   newImageContainer.append(newImage2);
// }
