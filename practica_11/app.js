// Importamos modulo express
const express = require('express');
// Creamos una instancia de express
const app = express();
// Creamos una variable para el puerto
let port = process.env.PORT || 3000;

// app.use() es un middleware que se ejecuta antes de que se ejecute la ruta
// Creamos una carpeta publica para los archivos estaticos
// __dirname es una variable global que contiene la ruta del directorio actual
// express.static() es un middleware que sirve archivos estaticos
app.use('/assets', express.static(__dirname + '/public'));

// app.use() es un middleware que se ejecuta antes de que se ejecute la ruta
// next() es una función que se ejecuta cuando el middleware ha terminado su ejecución
// nos muestra la url de la petición en la consola
app.use('/', (req, res, next) => {
    console.log('Request URL: ' + req.url);
    next();
});

// Ruta raiz que contiene un html con un css externo
app.get('/', (req, res) => {
    cad = `<!DOCTYPE html> <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="/assets/style.css" type="text/css">
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
    </html>`;

    res.send(cad);
});

// segunda ruta
app.get('/api', (req, res) => {
    res.json({ firstname: 'John', lastname: 'Doe'});
});

// tercera ruta, recibe un parámetro y lo muestra en el html con un css externo
app.get('/person/:id', (req, res) => {
    res.send(`<html><head><link rel="stylesheet" href="/assets/style.css" type="text/css"><body><h1>Person: ${req.params.id}</h1></body></head></html>`);
});

// Escuchamos el puerto
app.listen(port);