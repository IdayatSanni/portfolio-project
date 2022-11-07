const toggleButton = document.querySelector(".toggle-button");
const navHamburger = document.querySelector(".nav-hamburger");

toggleButton.addEventListener("click", () => {
  navHamburger.classList.toggle("nav-hamburger-active");
});
