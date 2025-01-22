"use strict";

const sections = document.querySelectorAll(".cols-2");
const triggerBottom = (window.innerHeight / 5) * 3;

const checkSections = function () {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        console.log(triggerBottom, sectionTop);

        if (sectionTop < triggerBottom) {
            section.classList.add("animated");
        } else {
            section.classList.remove("animated");
        }
    });
};

window.addEventListener("scroll", checkSections);
