'use strict';

/*
Obtenemos el elemento con el que queremos trabajar usando
document.querySelector()
*/
var title = document.querySelector('h1');
var lista = document.querySelector('#paola', '#luisa');



// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
title.innerHTML ='La Geek Girl seleccionada es: ' + lista.innerHTML;