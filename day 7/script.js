"use strict";

const heroHeading = document.querySelector(".hero__heading");
const teamHeadings = document.querySelectorAll(".heading--primary");
const teamSides = document.querySelectorAll(".hero__side");
const btnChangeTeam = document.querySelectorAll(".btn");

const expandSide = function (clickedSide, eOrigin) {
    const isExpanded = !clickedSide.classList.contains("hero__side--covered");
    if (isExpanded && eOrigin.className === "heading--primary") return;

    teamSides.forEach((side) => {
        if (side === clickedSide) {
            side.classList.toggle("hero__side--covered");
        } else {
            side.classList.toggle("hero__side--grayed-out");
        }
    });

    heroHeading.classList.toggle("invisible");
};

const adjustTransitions = function (el, className) {
    el.classList.add(className);
    setTimeout(() => {
        el.classList.remove(className);
    }, 1000);
};

teamHeadings.forEach((heading) => {
    heading.addEventListener("click", function () {
        const clickedSide = this.closest(".hero__side");
        expandSide(clickedSide, heading);
    });
});

btnChangeTeam.forEach((btn) => {
    btn.addEventListener("click", function () {
        const text = this.previousElementSibling;
        const clickedSide = this.closest(".hero__side");

        expandSide(clickedSide, btn);
        adjustTransitions(btn, "btn--fast-transition");
        adjustTransitions(text, "text--fast-transition");
    });
});
