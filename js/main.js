"use strict";


// ----------Navbar ----------
const buttonNavbar = document.querySelectorAll('[data-btn-nav]');
const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');
for (const btn of buttonNavbar) {
    btn.addEventListener('click', () => {
        navbar.classList.toggle('active');
        overlay.classList.toggle('active');
    });
}
//--------- navbar > SubMenu ----------
const linkDrop = document.querySelector('[data-link-dropdown]');
const subMenu = document.querySelector('[data-sub-menu]');
linkDrop.addEventListener('click', (e) => {
    e.preventDefault();
    subMenu.classList.toggle('active');
});

