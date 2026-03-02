const logo = document.querySelector(".logo");
const menuIcon = document.querySelector(".menu-icon");

const firstButton = document.querySelector(".button");
const firstCard = document.querySelector(".card");

menuIcon.addEventListener("click", function() {
    logo.innerHTML = "Study🎧";
});

firstButton.addEventListener("mouseover", function() {
    firstCard.style.backgroundColor = "lightpink";
});

firstButton.addEventListener("mouseout", function() {
    firstCard.style.backgroundColor = "lightyellow";
});