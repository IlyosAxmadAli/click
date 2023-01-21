function changeBackground() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  //   document.body.style.background =linear-gradient(89.4deg, rgba(194, 0, 39, 1) 0.8%, rgba(10, 35, 104, 1) 99.4%);

  let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  document.body.style.background = bgColor;
}
