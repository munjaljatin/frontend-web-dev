const image1 = document.body.children[3];
function changeImage() {
  image1.src =
    "https://plus.unsplash.com/premium_photo-1744016650899-f2ee69330a7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D";
}

const returnValue = setTimeout(changeImage, 5000);
console.log(returnValue);

const allImages = document.getElementsByTagName("img");

function traverseImages() {
  for (let i = 0; i < allImages.length; i++) {
    allImages[i].src =
      "https://images.unsplash.com/photo-1750292836196-3aafd7645c08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D";
  }
}

const allParagraphs = document.getElementsByTagName("p");
function traverseParagraph() {
  for (let i = 0; i < allParagraphs.length; i++) {
    allParagraphs[i].innerText = "Lorem Ipsum";
  }
}

const lorem = document.getElementsByClassName("lorem");
console.log(lorem[0]);
console.dir(lorem[0]);

lorem[0].innerHTML = "<span>This is a span tag.</span>";

const tech = document.getElementById("tech");
console.log(tech);
console.dir(tech);

const ipsum = document.getElementById("ipsum");
console.log(ipsum);
console.dir(ipsum);

// querySelector
const firstInlineElement = document.querySelector(".inline-tag");
console.log(firstInlineElement);
console.dir(firstInlineElement);
const inlineElements = document.querySelectorAll(".inline-tag");
console.log(inlineElements);
console.dir(inlineElements);

console.log(firstInlineElement.innerText);
firstInlineElement.style.color = "white";
firstInlineElement.style.backgroundColor = "red";
firstInlineElement.style.border = "2px solid grey";

const newElement = document.createElement("h3");
newElement.innerText = "This h3 is created using the Javascript";
// newElement.appendChild();
// document.appendChild;
document.body.appendChild(newElement);

const newElement2 = document.createElement("img");
newElement2.setAttribute("src", "./images/css.png");
newElement2.style.border = "2px solid green";
newElement2.style.width = "250px";

document.body.appendChild(newElement2);
