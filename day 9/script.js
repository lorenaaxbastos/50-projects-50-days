"use strict";

const btns = document.querySelectorAll(".btn");
const audios = document.querySelectorAll(".audio");
const audioBoxes = document.querySelectorAll(".audio-box");
const emojis = ["👏", "💀", "😨", "🥳", "🏆", "❌"];

const minMaxRandom = (min, max) => Math.random() * (max - min) + min;

const emojiGenerator = (i, amount, audioDuration) => {
    const viewportWidth = window.innerWidth;
    const audioBox = audioBoxes[i];

    const minBezier = 0.3;
    const maxBezier = 0.7;
    const emojisArray = [];

    for (let j = 0; j < amount; j++) {
        const fontSize = minMaxRandom(1.5, 6);

        const maxAllowedDuration = audioDuration;
        const duration = minMaxRandom(1, maxAllowedDuration);
        const maxAllowedDelay = audioDuration - duration;
        const delay = minMaxRandom(0, maxAllowedDelay);

        const emojiEl = document.createElement("span");

        emojiEl.classList.add("emoji");
        emojiEl.textContent = emojis[i];
        emojiEl.style.cssText = `
            left: ${minMaxRandom(-50, viewportWidth)}px;
            bottom: ${-fontSize * 2}rem;
            font-size: ${fontSize}rem;
            transition-duration: ${duration}s;
            transition-delay: ${delay}s;
            transition-timing-function: cubic-bezier(
                ${minMaxRandom(minBezier, maxBezier)}, 
                ${minMaxRandom(minBezier, maxBezier)}, 
                ${minMaxRandom(minBezier, maxBezier)}, 
                ${minMaxRandom(minBezier, maxBezier)}
            );
        ;`;

        audioBox.appendChild(emojiEl);
        emojisArray.push(emojiEl);
    }

    setTimeout(() => {
        emojisArray.forEach((emoji) => {
            emoji.classList.add("animated");

            const duration = parseFloat(emoji.style.transitionDuration);
            const delay = parseFloat(emoji.style.transitionDelay);

            setTimeout(() => emoji.remove(), (duration + delay) * 1000);
        });
    }, 1);
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        for (let j = 0; j < audios.length; j++) {
            if (i === j) continue;
            else if (!audios[j].paused) {
                audios[j].pause();
                const emojisEl = document.querySelectorAll(".emoji");
                emojisEl.forEach((emoji) => (emoji.style.display = "none;"));
            }
        }

        if (!audios[i]) return;

        const emojisPerSecond = 100;
        const audioDuration = audios[i].duration;

        if (audioDuration > 0) {
            const amount = Math.ceil(audioDuration * emojisPerSecond);
            audios[i].play();
            emojiGenerator(i, amount, audioDuration);
        }
    });
});
