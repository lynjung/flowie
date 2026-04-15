const menuToggle = document.querySelector("#menuToggle");
const mobileNav = document.querySelector("#mobileNav");

const firstButton = document.querySelector("#btn1");
const firstCard = document.querySelector("#card1");

const secondButton = document.querySelector("#btn2");
const secondText = document.querySelector("#text2");

const thirdButton = document.querySelector("#btn3");
const thirdText = document.querySelector("#text3");

const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    768: {
      slidesPerView: 3
    }
  }
});

menuToggle.addEventListener("click", function () {
  mobileNav.classList.toggle("show-menu");
});

firstButton.addEventListener("mouseover", function () {
  firstCard.style.backgroundColor = "daffe9";
  firstCard.style.transform = "scale(1.03)";
});

firstButton.addEventListener("mouseout", function () {
  firstCard.style.backgroundColor = "lightyellow";
  firstCard.style.transform = "scale(1)";
});

secondButton.addEventListener("click", function () {
  secondText.innerHTML = "Tasks added! 🚀";
});

thirdButton.addEventListener("click", function () {
  thirdText.innerHTML = "Insights updated! 📊";
});