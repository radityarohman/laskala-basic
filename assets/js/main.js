const hamburgerMenu = document.querySelector(".hamburger-menu")
const dropdownNav = document.querySelector(".dropdown-menu")

hamburgerMenu.addEventListener("click", mobileMenu);

const mobileMenu = () => {
    hamburgerMenu.classList.toggle("active")
    dropdownNav.classList.toggle("active")
}