"use strict";

const btns = document.querySelectorAll(".btn");
const audios = document.querySelectorAll(".audio");
const emojis = document.querySelectorAll(".emoji");

const updateAnimationTransform = function (el) {
    const root = document.documentElement;
    const viweportY = window.innerHeight;
    const height = el.getBoundingClientRect().height;
    const top = el.getBoundingClientRect().top;
    const bottom = el.getBoundingClientRect().bottom;

    root.style.setProperty("--vh-top", `-${top + height * 2}px`);
    root.style.setProperty("--vh-bottom", `${viweportY - (bottom - height)}px`);
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        updateAnimationTransform(emojis[i]);
        emojis[i].style.display = "inline-block";
        emojis[i].classList.add("animated");
    });
});
