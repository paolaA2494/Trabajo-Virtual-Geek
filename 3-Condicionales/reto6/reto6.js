'use strict';
var avocadoPrice = 0;
var money = 0;

avocadoPrice = parseFloat(prompt('Ingrese el precio del aguacate'));
money =  parseInt(prompt('Ingrese la cantida de dinero'));

let avocados = (money >= avocadoPrice) ? avocados =(money / avocadoPrice) : avocados = 0;
console.log('la cantidad de acuacates es: ' +avocados);