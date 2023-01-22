// function changeBackground() {
//   const red = Math.floor(Math.random() * 255);
//   const green = Math.floor(Math.random() * 255);
//   const blue = Math.floor(Math.random() * 255);

//   let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
//   document.body.style.background = bgColor;
// }

const body = document.querySelector("body");
const button = document.querySelector("button");
const text = document.querySelector(".text");

const values = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function getGradient() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.trunc(Math.random() * values.length);
    color += values[randomNumber];
  }
  return color;
}

function setGradient() {
  const color1 = getGradient();
  const color2 = getGradient();
  const randomDeg = Math.trunc(Math.random() * 360);
  const bgColor = `linear-gradient(
    ${randomDeg}deg,
    ${color1},
    ${color2}
  )`;
  body.style.background = bgColor;
  text.textContent = bgColor;
}
setGradient();
button.addEventListener("click", setGradient);
