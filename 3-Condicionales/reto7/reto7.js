'use strict';
var año = parseInt(prompt("Ingrese un año "));
var añoBi = año + (año % 4);
console.log("El proximo año bisciesto es: " + añoBi);