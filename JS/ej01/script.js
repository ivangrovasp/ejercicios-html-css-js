let botonCmbiarContenidoDIV = document.getElementById("cambiarContenidoDelDiv");

botonCmbiarContenidoDIV.addEventListener('click', function(){
    let DivCont = document.getElementById('contenido');
    DivCont.textContent = 'Hola Mundo'
});