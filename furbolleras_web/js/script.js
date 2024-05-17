const menuBtn = document.querySelector('.Header-btn'); //variable del botón
const menu = document.querySelector('.Header-menu'); //variable del menú
const btnIzq = document.querySelector('.Btn-izq'); //variable botón equipo izq
const btnDcha = document.querySelector('.Btn-dcha'); //variable botón equipo dcha
const item = document.querySelectorAll('.Section-item'); //variable del item del equipo


//Desplegar el menú hamburguesa
menuBtn.addEventListener('click', () => {
    menu.classList.toggle("isActive");
});


//Cambiar de jugadora en sección Equipo (versión móvil)
let position = 0;

let mostrarImg = function () {
    item.forEach(function(each, i){
        item[i].classList.remove('isActive');
    })
    item[position].classList.add('isActive');
}


btnDcha.addEventListener('click', () => {
    position++;
    if(position >= 16){
        position = 0;
    }
    mostrarImg();
});
btnIzq.addEventListener('click', () => {
    position--;
    if(position < 0) {
        position = 15;
    }
    mostrarImg();
});
