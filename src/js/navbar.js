// Query Selectors
const toggleMenuButton = document.querySelector(
  ".navigation-menu__hamburger-menu"
);
const navbarLinks = document.querySelector(".navbar__navigation");
const links = document.querySelectorAll(".navbar__navigation-links");

// Hamburger Button Event
toggleMenuButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("navbar__navigation--active");
});
