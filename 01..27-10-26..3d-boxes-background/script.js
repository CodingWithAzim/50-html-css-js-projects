const btn = document.getElementById("btn");
const boxContainer = document.getElementById("boxes");
btn.addEventListener("click", () => {
  boxContainer.classList.toggle("big");
});

let createBoxes = () => {
  for (let row = 0; row <= 3; row++) {
    for (let col = 0; col <= 3; col++) {
      let div = document.createElement("div");
      div.classList.add("box");
      boxContainer.appendChild(div);

      div.style.backgroundPosition= `${-col * 125}px ${-row * 125}px`
    }
  }
};

createBoxes();
 