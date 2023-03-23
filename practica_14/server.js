// Importamos el módulo express
const express = require('express');
// Creamos una instancia de express
const app = express();
// Definimos el puerto
let port = process.env.PORT || 3000;
// Definimos la ruta de los archivos estáticos
app.use('/assets', express.static(__dirname + '/public'));
// Definimos el motor de plantillas
app.set('view engine', 'ejs');
// Definimos la ruta de las plantillas
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
// Definimos la ruta person, con parámetros y query string (opcional) 
// http://localhost:3000/person/Kamey?message=hola&times=3
app.get('/person/:id', (req, res) => {
    res.render('person', {ID: req.params.id, MESSAGE: req.query.message, TIMES: req.query.times});
});
// Iniciamos el servidor
app.listen(port);