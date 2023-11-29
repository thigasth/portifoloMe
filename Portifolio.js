var btnMenu = document.getElementById("btn-menu");
var menu = document.getElementById("menu-mobile");
var btnFechar = document.getElementById("btn-fechar");

btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
});

btnFechar.addEventListener("click", () => {
    menu.classList.remove("abrir-menu");
  });
