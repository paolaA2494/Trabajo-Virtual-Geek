var edadPerro = 0;
var edadHumano = 0;
edadPerro = parseInt(prompt('Ingrese la edad del perro'));
if (edadPerro === 1) {
    console.log('la edad para humano es: 15 años');
  } else if ( edadPerro === 2) {
    console.log('la edad para humano es: ' +(15+9)+ ' años.');
  } else if (edadPerro >= 3) {
      edadHumano = ((edadPerro*5)+15+9);
    console.log('la edad para humano es: ' +edadHumano + ' años.');
  } else {  

  }