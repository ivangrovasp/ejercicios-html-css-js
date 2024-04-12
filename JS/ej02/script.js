const colors = ['blue', 'violet', 'orange', 'green', 'red']; //lista de colores
let iColor = 0; 

setInterval(function(){ //Ejecuta una función cada x segundos que yo diga
    let DivCont = document.getElementById('contenido'); //Seleccionamos el elemento del DOM que tenga ID contenido
    DivCont.style.backgroundColor = colors[iColor] //establecemos el color en el indice
    iColor=(iColor+1) % colors.length; //se recorre la lista una y otra vez
},1000);