"use strict";

const stepsNumbers = document.querySelectorAll(".steps__numbers");
const stepsBtns = document.querySelectorAll(".steps-btn");
const btnNext = document.querySelector(".steps-btn--next");
const btnPrev = document.querySelector(".steps-btn--prev");
const lastActive = "steps__numbers--active";
let currActive = 1;

stepsBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target === btnNext) {
            currActive++;
            stepsNumbers[currActive - 1].classList.toggle(lastActive);
        } else if (e.target === btnPrev) {
            currActive--;
            stepsNumbers[currActive].classList.toggle(lastActive);
        }

        if (currActive === stepsNumbers.length) btnNext.disabled = true;
        else if (currActive < 2) btnPrev.disabled = true;
        else {
            btnNext.disabled = false;
            btnPrev.disabled = false;
        }
    });
});
