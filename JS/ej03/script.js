function horaActual(){
    let spanHora = document.getElementById('contenido');
    let horaActualmente = new Date();
    let horaMostrar = horaActualmente.toLocaleTimeString()
    spanHora.textContent = horaMostrar;
}
setInterval(horaActual,1000);