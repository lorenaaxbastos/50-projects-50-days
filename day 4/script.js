"use strict";

const form = document.querySelector("form");
const searchBtn = document.querySelector(".search--btn");
const searchInput = document.querySelector(".search--input");

searchBtn.addEventListener("click", (e) => {
    if (!searchInput.classList.contains("search--active")) {
        e.preventDefault();
        searchInput.classList.add("search--active");
        searchInput.focus();
    }
});

searchInput.addEventListener("blur", (e) => {
    if (e.relatedTarget !== searchBtn) {
        searchInput.classList.remove("search--active");
    }
});

document.body.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && searchInput === document.activeElement) {
        searchInput.classList.remove("search--active");
    }
});
