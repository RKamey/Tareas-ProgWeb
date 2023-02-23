// ==== [ Revealing Module Pattern ] ====

let greeting = "Hello from greet 5";
let running = "Hello I'm running";
let playing = "Hello I'm playing";

let greet = () => {console.log(greeting)};
let run = () => {console.log(running)};
let play = () => {console.log(playing)};

// Ya no queda accesible greeting, no podriamos cambiarlo
// Porque solo exponemos greet
// module.exports = {
//     greet: greet
// }

// Esto también funciona porque se llaman de la misma forma
// Obviamos el valor del value
module.exports = {
    greet,
    run,
    play
}