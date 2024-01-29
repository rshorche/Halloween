let text = document.getElementById("text");
let tree = document.getElementById("tree");
let gateLeft = document.getElementById("gate-left");
let gateRight = document.getElementById("gate-right");
let zombie = document.getElementById("zombie");
let sec2Img = document.getElementById("sec2-img");
let sec2Text = document.getElementById("sec2-text");
let sec3 = document.getElementById("sec3");
let sec4 = document.getElementById("sec4");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  console.log(value);
  text.style.top = value * -1.1 + "px";
  tree.style.left = value * -1.5 + "px";
  tree.style.top = value * -1.5 + "px";
  gateLeft.style.translate = value * -2 + "px";
  gateRight.style.translate = value * 2 + "px";
  sec2Img.style.translate = value * -0.1 + "px";
  sec2Text.style.translate = value * 0.08 + "px";
  sec3.style.translate = value * 0.1 + "px";
  sec4.style.translate = value * -0.1 + "px";
});
