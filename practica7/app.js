// Código de la práctica 5 pero con el emisor de Node
// Inyectamos la dependencia 
const Emitter = require('events');
const config = require('./config'); // Importamos config

let emtr = new Emitter();

/* 
Refactorización de:
emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});
*/

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.');
});


/* 
Refactorización de:
emtr.on('greet', () => {
    console.log('A greeting ocurred!');
});
*/

emtr.on(config.events.GREET, () => {
    console.log('A greeting ocurred!');
});

/* 
Refactor de:
emtr.on('jump', () => {
    console.log('someone jumped!');
});
*/

emtr.on(config.events.JUMP, () => {
    console.log('someone jumped!');
});

console.log(emtr);
emtr.emit('jump');

// Cambiamos nuestro emisor, no inyecto mi emisor sino el de Node