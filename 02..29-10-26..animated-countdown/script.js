/* ===== fist time ===== */

const counter = document.querySelector(".counter");
const nums = document.querySelectorAll(".nums span");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");

/* ===== secound time  ===== */
runAnimation();

function runAnimation() {
  nums.forEach((num, index, fullArray) => {
    const Lastindex = nums.length - 1;

    num.addEventListener("animationend", (e) => {
      if (
        e.animationName === "goIn" &&
        index !== Lastindex
      ) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (
        e.animationName === "goOut" &&
        num.nextElementSibling
      ) {
        num.classList.add("in");
      }
    });
  });
}
