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
    // console.log(nums.length - 1);
    console.log(num.length - 1);
    
  });
}
