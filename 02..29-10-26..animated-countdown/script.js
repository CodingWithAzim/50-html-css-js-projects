/* ===== fist time ===== */

const counter = document.querySelector(".counter");
const nums = document.querySelectorAll(".nums span");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");

/* ===== secound time  ===== */
runAnimation();

function runAnimation() {
  nums.forEach((num, index) => {
    //  console.log(
    //   `content: ${num.textContent} index: ${index} `,
    // );
    //  console.log(num.className); // "in" // ক্লাসের লিস্ট
    const lastIndex = nums.length - 1;

    num.addEventListener("animationend", (e) => {
      // console.log(e.animationName);
      // console.log(index);
      // console.log(lastIndex);

      if (
        (e.animationName = "goIn" && index !== lastIndex)
      ) {
        num.classList.remove("goIn");
        num.classList.add("goOut");
      }
    });
  });
}
