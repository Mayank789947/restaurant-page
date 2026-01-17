import "./styles.css";
import { homePage } from "./homepage/homepage.js";
import { loadMenu } from "./menupage/menuPage.js";
import { loadAbout } from "./about/about.js";
import { loadContact } from "./contact/contact.js";


const buttons = document.querySelectorAll(".btn");

function clearContent() {
    content.innerHTML = "";
    buttons.forEach(button => {
        button.classList.remove("active");
    })
};

document.querySelector(".home").addEventListener("click", () => {
    clearContent();
    homePage();
});

document.querySelector(".menu").addEventListener("click", () => {
    clearContent();
    loadMenu();
});

document.querySelector(".about").addEventListener("click", () => {
    clearContent();
    loadAbout();
});

document.querySelector(".contact").addEventListener("click", () => {
    clearContent();
    loadContact();
});

homePage();