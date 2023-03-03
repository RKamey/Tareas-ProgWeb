// Importamos el módulo express
const express = require('express');
// Creamos una instancia de express
const app = express();

// Definimos el puerto, puede ser el 3000 o el que nos den
let port = process.env.PORT || 3000;

// Primera ruta, regresa un HTML
app.get('/', (req, res) => {
    res.send(`<html><head><body><h1>Hello World!</h1></body></head></html>`);
});

// Iniciamos el servidor
app.listen(port);

// segunda ruta /api, regresa un objeto JSON
// Ruta que nos regresa un objeto JSON con el nombre y apellido
app.get('/api', (req, res) => {
    res.json({ firstname: 'John', lastname: 'Doe'});
});

// tercera ruta, recibe un param
// Ruta que recibe un parámetro y lo regresa en el HTML
app.get('/person/:id', (req, res) => {
    res.send(`<html><head><body><h1>Person: ${req.params.id}</h1></body></head></html>`);
});


// podemos ejecutar el servidor con nodemon app.js para que se reinicie automáticamente 
// cada vez que guardemos un cambio en el código