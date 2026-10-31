/* ===== fist time ===== */

const counter = document.querySelector(".counter");
const nums = document.querySelectorAll(".nums span");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");

/* ===== secound time  ===== */
runAnimation();

function runAnimation() {
  nums.forEach((num, index) => {
    const Lastindex = nums.length - 1;

    num.addEventListener("animationend", (e) => {
      console.log(num, e.animationName);

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
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}

/* ===== third time ===== */

let resetDom = () => {
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");
  nums.forEach((num) => {
    num.classList.value = "";
  });

};

replay.addEventListener("click", resetDom);
