// create slide show
const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;

setInterval(() => {
    i++;  // increment counter
    const icon = document.querySelector(".section-1-icons .change")
    icon.classList.remove("change");
    // if on last icon, reset change class to first icon
    if (i > icons.length) {
        icons[0].classList.add("change");
        i = 1;
    } else {
        icon.nextElementSibling.classList.add("change");
    };
}, 4000);