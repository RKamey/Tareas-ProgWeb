// function greet() {
//     console.log('Hello');
// }

// greet();

// functions as parameters
// function logGreetings(fn) {
//     fn();
// }

// logGreetings(greet);
// // pasamos la función greet como
// parametro e invocandola con el nombre del argumento fn

// Esto es una función expresada
// let greetMe = function() {
//     console.log('Hello from the function expression');
// }

// greetMe();

// logGreetings(greetMe);
// functions are first class, pass it as a parameter

// ===== [ Refactorización con arrow functions ] =====

// Refactorización de la función greet()
let greet = () => console.log('Hello');
greet();

// Refactorización de la función logGretting()
let logGreetings = (fn) => fn();
logGreetings(greet);

// Refactorización de la función greetMe()
let greetMe = () => console.log('Hello from the function expression');
greetMe();

logGreetings(greetMe);
