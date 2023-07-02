const productsLink = document.getElementById("products-link");
const productsDropdown = document.querySelector(".products-dropdown");
const menuLink = document.getElementById("menu");
const productsMenuClose = document.getElementById("close");
const menuItems = document.querySelector(".menu-items");
const productsMenu = document.getElementById("products-menu");
const menuClose = document.getElementById("close-menu-link");

productsLink.addEventListener("click", toggleDropdown);
menuLink.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
productsMenuClose.addEventListener("click", closeProductMenu);
productsMenu.addEventListener("click", openProductMenu);

// productsLink.addEventListener("mouseenter", toggleDropdown);
// productsLink.addEventListener("mouseleave", toggleDropdown);

function toggleDropdown() {
    productsDropdown.classList.toggle("show");
}

function openMenu(){
    menuItems.style.display = "block";
}

function closeMenu(){
    menuItems.style.display = "none";
}

function openProductMenu() {
    productsDropdown.style.display = "block";
}

function closeProductMenu() {
    productsDropdown.style.display = "none";
}