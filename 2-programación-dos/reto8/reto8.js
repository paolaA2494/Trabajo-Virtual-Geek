'use strict';
const firstDogImage = "<img src='https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg'>";
const firstDogName = 'Dina';

const secondDogImage = '<img src="https://images.dog.ceo/breeds/malamute/n02110063_642.jpg">';
const secondDogName = 'Luna';


const thirdDogImage = '<img src="https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg">';
const thirdDogName = 'Lana';

const divElementFirst = document.querySelector('.first');

divElementFirst.innerHTML = (`El perro  ${firstDogImage}  se llama,   ${firstDogName} `);

const divElementSecond = document.querySelector('.second');

divElementSecond.innerHTML = (`El perro  ${secondDogImage}  se llama,   ${secondDogName} `);

const divElementthird = document.querySelector('.third');

divElementthird.innerHTML = (`El perro  ${thirdDogImage}  se llama,   ${thirdDogName} `);