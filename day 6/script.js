"use strict";

const sections2col = document.querySelectorAll(".cols-2");

const observer = new IntersectionObserver(
    (sections) => {
        sections.forEach((section) => {
            if (section.isIntersecting) {
                section.target.classList.add("animated");
            }
        });
    },
    {
        root: null,
        rootMargin: window.matchMedia("(max-width: 576px)").matches
            ? "40px"
            : "200px",
        threshold: 0.1,
    }
);

sections2col.forEach((section) => {
    observer.observe(section);
});
