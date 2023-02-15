// Esta función la vamos a exportar
let greet = () => console.log('Hello from the module');

// Y con esto hacemos accesible la función greet donde sea que
// la importemos, module.exports y lo que queramos que salga
module.exports = greet;