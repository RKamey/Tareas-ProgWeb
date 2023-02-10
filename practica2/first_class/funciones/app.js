/*
function greet() {
    console.log('Hello');
}

greet(); //invoke

//functions as parameters
function logGreeting(fn) {
    fn();
}
logGreeting(greet);
// pasamos la función greet como parámetro
// y la invocamos con el nombre del argumento fn

// function expression
let greetMe = function () {
    console.log('Hello from the function expression');
}
greetMe();

logGreeting(greetMe);
// functions are first class, pass it as a parameter
*/

// ==== [ Refactorización de las funciones greet ] ====

// Refactorizamos con arrow function
let greet = () => console.log('Hello');
greet();

// Como tenemos un solo parámetro no es necesario los paréntesis
// Y como sólo invocamos la función, sólo invocamos fn()

let logGreeting = fn => fn();
logGreeting(greet);

let greetMe = () => console.log('Hello from the function expression');
greetMe();

logGreeting(greetMe);