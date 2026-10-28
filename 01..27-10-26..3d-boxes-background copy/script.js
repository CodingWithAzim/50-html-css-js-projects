const btn = document.querySelector("#btn");
const mainBox = document.querySelector(".main");

btn.addEventListener("click", () => {
  mainBox.classList.toggle("jokonAmiThakbo");
  console.log("Button clicked!");
});
