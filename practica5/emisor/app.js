// Inyectamos la dependencia 
const Emitter = require('./emitter');
// Instanciamos el "emisor de eventos"
let emtr = new Emitter();
// Agregamos la función greet que imprime en consola un mensaje
emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});
// Agregamos otra función con el mismo nombre pero imprime otro mensaje
emtr.on('greet', () => {
    console.log('A greeting ocurred!');
});

console.log('Hello!');
// Invocamos la función greet, con emit
emtr.emit('greet');

// Agregamos otra función
emtr.on('jump', () => {
    console.log('someone jumped!');
});

console.log(emtr);
emtr.emit('jump');

// Ahora emtr contiene 2 events: greet y jump
// Greet contiene dos funciones anónimas
// Y jump contiene una función anónima