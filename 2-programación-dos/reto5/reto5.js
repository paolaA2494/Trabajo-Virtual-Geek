'use strict';

/*
Obtenemos el elemento con el que queremos trabajar usando
document.querySelector()
*/
var password = document.querySelector('p');

// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
password.innerHTML ='Mi contraseña es: ' + '**';