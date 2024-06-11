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


// ----------include Swiper files in your project----------
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});





