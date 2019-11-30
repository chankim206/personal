// Menu Dom
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBrand = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

let show = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!show) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBrand.classList.add("show");
    navItems.forEach(item => {
      item.classList.add("show");
    });
    show = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBrand.classList.remove("show");
    navItems.forEach(item => {
      item.classList.remove("show");
    });
    show = false;
  }
}
