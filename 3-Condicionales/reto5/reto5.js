'use strict';
var divelement = '';
if (divelement = document.querySelector('.warning')) {
    const content = '<h1>AVISO</h1> <p>Tenga cuidado</p>';
    divelement.innerHTML = content;
} else if (divelement = document.querySelector('.success')) {
    const content = '<h1>CORRECTO</h1> <p>Los datos son correctos</p>';
    divelement.innerHTML = content;
} else if (divelement = document.querySelector('.error')){
    const content = '<h1>Error</h1> <p>Ha surgido un error</p>';
    divelement.innerHTML = content;
}
