"use strict";

const cards = document.querySelectorAll(".card");
const media1400 = window.matchMedia("(max-width: 1400px)");
const cardsTextEl = document.querySelectorAll(".card__text-box .text");
const cardsText = [];

const removeActiveClasses = function (iterable, classToRemove) {
    iterable.forEach((item) => {
        item.classList.remove(classToRemove);
    });
};

const truncText = function (media) {
    const activeText = document.querySelector(".card--active .text");

    if (media.matches) {
        activeText.innerHTML = `${activeText.innerHTML
            .split(".")[0]
            .trim()}. ${activeText.innerHTML
            .split(".")[1]
            .trim()
            .split(".")[0]
            .trim()}.`;
    } else {
        cardsText.forEach((text) => {
            if (text.trim().includes(activeText.innerHTML)) {
                activeText.innerHTML = text;
            }
        });
    }
};

const ini = function () {
    cardsTextEl.forEach((text) => {
        cardsText.push(text.innerHTML);
    });

    truncText(media1400);

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            removeActiveClasses(cards, "card--active");
            card.classList.add("card--active");
            truncText(media1400);
        });
    });

    media1400.addEventListener("change", function () {
        truncText(media1400);
    });
};

ini();
