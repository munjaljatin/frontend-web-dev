const parentDiv = document.querySelector(".parent");
console.log(parentDiv);

const btn = document.querySelector(".child-1");
btn.addEventListener("click", () => {
  // document.body.style.backgroundColor = "green";
  parentDiv.style.display = "none";
});

const newBtn = document.createElement("button");
newBtn.innerText = "Display";

document.getElementById("root").appendChild(newBtn);

newBtn.addEventListener("click", function () {
  parentDiv.style.display = "block";
});
