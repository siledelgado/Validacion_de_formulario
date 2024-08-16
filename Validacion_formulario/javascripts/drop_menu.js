  function dropMenu() {
    const button = $("#drop_menu_btn");  // SELECCIONA EL BOTÓN DE MENÚ DESPLEGABLE
    const menu = $("#drop_menu");  // SELECCIONA EL MENÚ DESPLEGABLE
    button.click(function(){  // AGREGA UN EVENTO DE CLIC AL BOTÓN
      menu.toggle("500", "swing");  // ALTERNA LA VISIBILIDAD DEL MENÚ CON EFECTO DE ANIMACIÓNDE 500MS Y TRANSICIÓN 'SWING'
    });
};

$(function() {
    dropMenu();  // EJECUTA LA FUNCIÓN DROPMENU CUANDO EL DOCUMENTO ESTÉ COMPLETAMENTE CARGADO
})
