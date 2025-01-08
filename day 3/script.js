"use strict";

const navBtn = document.querySelector(".nav-btn");
const navBtnRotated = document.querySelector(".nav-btn--rotated");
const body = document.querySelector("body");
let scrollPos;

navBtn.addEventListener("click", () => {
    scrollPos = window.scrollY;
    window.scrollTo(0, 0);
    body.classList.add("body--rotated");
});

navBtnRotated.addEventListener("click", () => {
    // window.scrollTo(0, scrollPos);
    body.classList.remove("body--rotated");
    setTimeout(() => {
        window.scrollTo({ top: scrollPos, behavior: "smooth" });
    }, 600);
});
