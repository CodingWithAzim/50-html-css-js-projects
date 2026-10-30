const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");

function resetDOM() {
  counter.classList.remove("hide"); // show hobe
  finalMessage.classList.remove("show"); //go ar reply show hobe

  nums.forEach((num) => {
    num.classList.value = "";
  });    

  nums[0].classList.add("in");
}

replay.addEventListener("click", () => {
  resetDOM();
  console.log("resetDOM চলেছে");
});
