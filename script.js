const logo = document.querySelector(".logo");
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav-desktop");

const firstButton = document.querySelector("#button1");
const firstCard = document.querySelector("#card1");

const secondButton = document.querySelector("#button2");
const secondText = document.querySelector("#text2");

const thirdButton = document.querySelector("#button3");
const thirdText = document.querySelector("#text3");

menuIcon.addEventListener("click", function() {
    logo.innerHTML = "Study Mode🎧";

    if (nav.style.display === "block") {
        nav.style.display = "none";
    }
    else {
        nav.style.display = "block";
    }
});

firstButton.addEventListener("mouseover", function() {
    firstCard.style.backgroundColor = "lightgreen";
    firstCard.style.transform = "scale(1.03)";
});

firstButton.addEventListener("mouseout", function() {
    firstCard.style.backgroundColor = "lightyellow";
    firstCard.style.transform = "scale(1)";
});

secondButton.addEventListener("click", function() {
    secondText.innerHTML = "Task Planning Mode 🗒️";
});

thirdButton.addEventListener("click", function() {
    thirdText.innerHTML = "Currently viewing insights...";
});