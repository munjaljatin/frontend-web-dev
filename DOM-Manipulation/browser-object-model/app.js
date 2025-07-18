console.log(window.location);
console.dir(window);

const heading2 = window.document.body.children[0];
console.log(heading2);
console.dir(heading2);

heading2.innerText = "Hello";

const innerH = window.innerHeight;
const outerH = window.outerHeight;
const titleBarHeight = outerH - innerH;
console.log(titleBarHeight);

const name = "jatin";
console.log(name);
