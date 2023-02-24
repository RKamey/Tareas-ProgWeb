// ==== [ Module Patterns ] ====
// Importamos greet1 del archivo gree1.js
let greet = require('./greet1');
// Aquí traemos la propiedad greet del módulo greet2
let greet2a = require('./greet2').greet;

// Invocamos la función que se encuentra en el modulo
greet();

// Al tratar de invocar me dice que no es una función porque es un objeto
// greet2a.greet();C

const greet3 = require('./greet3'); // objeto construido
console.log(greet3);
greet3.greet();
// Cambiamos la propiedad greeting del objeto desde la memoria porque es un puntero
// Por lo tanto se cambiaría para todos los que tengan la inyección
greet3.greeting = "Hello from the App";
console.log(greet3);

let greet3b = require('./greet3');
greet3b.greet();

const Greet4 = require('./greet4');
let myGreet = new (Greet4);
myGreet.greet();

const greet5 = require('./greet5');
greet5.greet();
greet5.run();
greet5.play();