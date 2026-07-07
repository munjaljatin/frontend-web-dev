const container = document.querySelector(".image-container");
console.log(container);
const image = document.querySelector("img");
console.log(image);
// console.dir(image);

const imageElement = document.createElement("img");
imageElement.setAttribute(
  "src",
  "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/13.png"
);
const newImageContainer = document.querySelector(".new-image-container");
newImageContainer.style.border = "2px solid red";
console.log(newImageContainer);
newImageContainer.appendChild(imageElement);

for (let i = 2; i < 1000; i = i + 10) {
  const newImage = image.cloneNode();
  newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`;
  container.append(newImage);
}

// for (let i = 2; i < 1000; i + 30) {
//   const newImage2 = imageElement.cloneNode();
//   newImage2.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`;
//   newImageContainer.append(newImage2);
// }

// Card Container
const cardContainer = document.querySelector(".card-container");
console.log(cardContainer);
console.dir(cardContainer);

const paraElement = document.createElement("p");
console.log(paraElement);

paraElement.innerText =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita aspernatur veniam culpa quaerat? Aut ad iusto nam repudiandae nobis placeat reiciendis! Eos odio sit perferendis nulla dolor expedita voluptatem corporis?";

cardContainer.appendChild(paraElement);

// Main Container
const mainContainer = document.querySelector(".main-container");
console.log(mainContainer);

const mainParagraph = document.createElement("p");
mainParagraph.innerHTML = "<b>This is Jatin Munjal</b>";
// mainParagraph.innerText = "He is a boy.";
// mainParagraph.textContent = "She is a girl.";
console.log(mainParagraph.textContent);
mainContainer.appendChild(mainParagraph);

const parent = document.querySelector(".parent");
console.log(parent);

// parent.append(heading2);
// parent.append(paragraph);

// parent.append(heading2, paragraph);
parent.style.border = "2px solid green";
parent.style.padding = "0 10px";
parent.style.borderRadius = "12px";
parent.style.display = "flex";
parent.style.flexWrap = "wrap";

for (let i = 1; i < 100; i++) {
  const imageContainer = document.createElement("div");
  imageContainer.className = "img-container";
  const image1 = document.createElement("img");
  image1.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`;
  const paragraph1 = document.createElement("p");
  paragraph1.innerText = i;
  imageContainer.style.textAlign = "center";
  paragraph1.style.margin = "0";
  imageContainer.append(image1, paragraph1);
  parent.append(imageContainer);
}
