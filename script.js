const btnMenu = document.querySelector('#showMenu');
const mobileMenu = document.querySelector('#mobileMenu');
const body = document.querySelector('body');
const header = document.querySelector('header');

btnMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('isHide');
    mobileMenu.classList.toggle('isOpen');
    header.classList.toggle('headerIsOpen');
});