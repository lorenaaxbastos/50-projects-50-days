"use strict";

const heroHeading = document.querySelector(".hero__heading");
const teamHeadings = document.querySelectorAll(".heading--primary");
const teamSides = document.querySelectorAll(".hero__side");

function toggleSelection(clickedSide) {
    teamSides.forEach((side) => {
        if (side === clickedSide) {
            side.classList.remove("hero__side--covered");
        } else {
            side.classList.add("hero__side--grayed-out");
        }
    });

    heroHeading.classList.add("invisible");
}

teamHeadings.forEach((heading) => {
    heading.addEventListener("click", function () {
        const clickedSide = this.closest(".hero__side");
        toggleSelection(clickedSide);
    });
});
