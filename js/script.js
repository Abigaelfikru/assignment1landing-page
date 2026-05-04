<div class="menu-toggle"id="mobile-menu">☰</div>
const menu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

document.querySelector(".first-button").addEventListener("click", () => {
alert("Get Started clicked!");
});
