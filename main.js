let pName = document.getElementById("name");
let btn = document.getElementById("btn");

let colors = ["blue", "red", "crayon", "blue", "yellow", "violet"];
let mnames = ["wess", "max", "Nel", "Vee", "Bobo"];
const changeColor = () => {
  randNum = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randNum];
  //Math.floor -> remove decimals
  let randName = Math.floor(Math.random() * mnames.length);
  pName.innerText = mnames[randName];
};
btn.addEventListener("click", changeColor);
//changeColor();
