'use strict';

/*
Obtenemos el elemento con el que queremos trabajar usando
document.querySelector()
*/
var parrafo = document.querySelector('p');

// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
parrafo.innerHTML = parrafo.innerHTML + ' Mundo Cruel';