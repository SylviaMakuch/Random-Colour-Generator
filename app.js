const button = document.querySelector("button");
button.addEventListener("click", function () {
  document.body.style.backgroundColor = getRandomRbg();

  const textColour = document.querySelector("h2");
  textColour.innerText = getRandomRbg();
});

function getRandomRbg() {
    const r = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}