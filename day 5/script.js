"use strict";

const progressComponent = document.querySelector(".progress");
const progressNumber = document.querySelector(".progress-number");
const progressLine = document.querySelector(".line");
const hero = document.querySelector(".hero");

let progress = 0;
let opacity = 100;
let blurFilter = 30;

const increaseCounting = () => {
    progress++;
    opacity--;
    blurFilter -= 0.3;

    hero.style.backdropFilter = `blur(${blurFilter}px)`;
    progressComponent.style.opacity = `${opacity}%`;
    progressNumber.textContent = `${progress}%`;
    if (progress >= 100) {
        clearInterval(progressPercentage);
        progressLine.style.strokeDasharray = "200";
        progressLine.style.animation = "none";
    }
};

const progressPercentage = setInterval(increaseCounting, 25);
