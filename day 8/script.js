"use strict";

const formInput = document.querySelectorAll(".form__input");
const formLabel = document.querySelectorAll(".form__label");
const animDuration = 40;

formLabel.forEach((label) => {
    label.innerHTML = label.textContent
        .split("")
        .map((letter) => `<span>${letter}</span>`)
        .join("");
});

const animateLetters = (label, action) => {
    [...label.children].forEach((letter, i) => {
        setTimeout(() => {
            letter.classList[action]("letter-animated");
        }, animDuration * i);
    });
};

formInput.forEach((input) => {
    const nextLabel = input.nextElementSibling;

    input.addEventListener("focus", () => animateLetters(nextLabel, "add"));
    input.addEventListener("blur", () => {
        if (!input.value) animateLetters(nextLabel, "remove");
    });
});
