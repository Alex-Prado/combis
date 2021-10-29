const activarmenu = document.querySelector('.activar-menu');
const desactivarmenu = document.querySelector('.desactivar-menu');

activarmenu.addEventListener('click', () => {

    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});
desactivarmenu.addEventListener('click', () => {

    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
})