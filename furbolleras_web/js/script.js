const menuBtn = document.querySelector('.Header-btn'); //variable del botón
const menu = document.querySelector('.Header-menu'); //variable del menú

//Desplegar el menú hamburguesa
menuBtn.addEventListener('click', () => {
    menu.classList.toggle("isActive");
});

