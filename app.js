// Primero creamos la inyección de la dependencia para poder usar la función toCelsius
const { toCelsius } = require("celsius");
 
// Aquí la mandamos a llamar y la imprimimos en consola
console.log(toCelsius(100)); // 38
console.log(toCelsius(100, 3)); // 37.778
console.log(toCelsius('105.981 degrees F', 5)); // 41.10056

// Acá creamos la inyección de la dependencia para usar la funcion toFahrenheit
const { toFahrenheit } = require('celsius');
 
// La mandamos a llamar y la imprimimos en consola
console.log(toFahrenheit(36)); // 97
console.log(toFahrenheit(36.68, 3)); // 98.024
console.log(toFahrenheit('-40.691 degrees C', 5)); // -41.24380

// Aquí vimos otra manera de inyectar la dependencia pero en una const, y repetimos el mismo procedimiento
const convertidor = require("celsius");

console.log(convertidor.toCelsius(20));
console.log(convertidor.toFahrenheit(30));