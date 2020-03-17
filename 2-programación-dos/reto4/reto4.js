'use strict';
var totalPersonas = 9;
var totalCuenta = 128;
var pagoAna = 0;
var pagoCada = 0;
 
pagoCada = ((totalCuenta - 2) / 9);
pagoAna = (pagoCada + 2);

console.log('Cada una paga:  $' +pagoCada);
console.log('Como Ana pidio un shot para 2 más que las demás: $' +pagoAna);