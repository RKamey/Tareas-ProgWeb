// Functions created on the fly

function greet() {
    console.log('Hello');
}

// let logGreeting = miParametro => miParametro();
// logGreeting(greet);

// Para definir una function expression created on fly sería de la siguiente forma:
let logGreeting = (miParametro) => miParametro();
logGreeting(function() {
    console.log('Hello from a function created on the fly');
});

// ==== [ Interpolación de strings ] ====

// Interpolación de forma clásica
let logGreeting1 = (miNombre, miColor) => {
    console.log("Hola " + miNombre + " buenos días! Tu color favorito es el: " + miColor);
};
logGreeting1("Kamey", "Verde");
// Podríamos refactorizar este codigo usando template strings

let refactorlogGreeting1 = (miNombre, miColor) => console.log(`Hola ${miNombre} buenos días! Tu color favorito es el: ${miColor}`);
refactorlogGreeting1("Kamey", "Verde");

// Otro ejemplo del uso de template strings sería:
let color = "rojo";
let talla = "M";
let modelo = "Clásico";

console.log("Juan tiene una playera talla " + talla + " de color " + color + " modelo " + modelo);
console.log(`Juan tiene una playera talla ${talla} de color ${color} modelo ${modelo}`);