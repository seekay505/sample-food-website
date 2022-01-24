// // slide show implementation using while loop
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }

// async function slideshow() {
//     // select icons
//     const icons = document.querySelectorAll(".section-1-icons i");
//     // continueous loop
//     while(true){
//         console.log("start of while loop");
//         for (let i = 0; i < icons.length; i++){
//             let icon = icons[i];
//             icon.classList.remove("change");
//             if (i === (icons.length - 1)) {
//                 // reset
//                 icons[0].classList.add("change");
//             } else {
//                 icon.nextElementSibling.classList.add("change");
//             }
//             await sleep(4000);
//         }
//     }
// }

// slideshow();

// create slide show
const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;

setInterval(() => {
  i++; // increment counter
  const icon = document.querySelector(".section-1-icons .change");
  icon.classList.remove("change");
  // if on last icon, reset change class to first icon
  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 4000);

// navbar animation
menuIcon = document.querySelector(".menu");
menuIcon.addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});
