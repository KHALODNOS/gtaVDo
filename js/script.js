'use strict';

// const  addEventsToElments = function (elemnts, eventType, callback) {
//     for (let i = 0; len < elemnts.length; i++) {
//     elemnts[i].addEventListener(eventType, callback)
//     }
// }


const navbar = document.querySelector('[data-navbar]');
const navbarTogggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll(["data-nav-link"]);

const toggleNav = function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active")
}

navbarTogggler.addEventListener("click", toggleNav);

const navClose = () => {
    navbar.classList.remove("active");
    navbarTogggler.classList.remove("active")
}

// addEventsToElment(navLinks, "click", navClose);


const header = document.querySelector(['data-header']);
const backToTopBtn = document.querySelector('[data-back-top-btn]');

const activeEl = function () {
    if(window.scrollY > 100) {
        header.classList.add("active");
        backToTopBtn.classList.add('active')
    } else {
        header.classList.remove("active");
        backToTopBtn.classList.remove("active");
    }
}

window.addEventListener("scroll" , activeEl);

const buttons = document.querySelector("[data-btn]");
const buttonRippleHover = function (event) {
    this.style.setProperty("--top", `${event.offsetY}px`)
    this.style.setProperty("--left", `${event.offsetX}px`)
}

// addEventsToElments(buttons, "mousemove", buttonRippleHover);

const revealElement = document.querySelectorAll('[data-reveal]');

const revealElmentOnscroll = function () {
    for(let i = 0, len = revealElement.length; i < len; i++) {
        const isElemntInsideWindow = revealElement[i].getBoundingClientRect().top < window.innerHeight / 1.1;

        if(isElemntInsideWindow) {
            revealElement[i].classList.add('revealed')
        }
    }
}

window.addEventListener('scroll', revealElmentOnscroll);
window.addEventListener('load', revealElmentOnscroll);

const cursor = document.querySelector("[data-cursor]");
const hoverElemts = [...document.querySelectorAll("a"), ...document.querySelector("button")];

const cursorMove = function (event) {
    cursor.style.top = `${event.clientY}px`;
    cursor.style.left = `${event.clientX}px`;
} 

window.addEventListener("mousemove" , cursorMove);

addEventListener(hoverElemts, "mouseover", function () {
    cursor.classList.add("hovered")
})

addEventListener(hoverElemts, "mouseout", function () {
    cursor.classList.remove("hovered")
})



