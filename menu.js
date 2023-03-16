//Este javascript es para cuando se esten usando dispositivos de pantalla pequeña

const menu = document.querySelector(".menu");
const abrirnMenuBtn = document.querySelector(".open-menu");
const cerrarMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

//Estos botones abren y cierran el menu a travez de la funcion toggleMenu
abrirMenuBtn.addEventListener("click", toggleMenu);
cerrarMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

//Esto cierra el menu al clickear uno de los links
menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function() {
        menu.classList.remove("menu_opened");
      })
})
