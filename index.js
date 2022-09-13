const bottunMenu = document.querySelector('.header__menu')
const menu = document.querySelector('.menu-lateral')

bottunMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})