// Importar el módulo express
const express = require('express');
// Crear una instancia de express
const app = express();

// Crear una ruta raíz que devuelva un mensaje de bienvenida
app.get('/', (req, res) => { // route handler
  res.send('Hello World, this is the root route!');
});

// Crear una ruta /uno que devuelva un html con un título h1 que diga "Ruta: Uno"
app.get('/uno', (req, res) => { // route handler)
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Uno</title>
    </head>
    <body>
        <h1>Ruta: Uno</h1>
    </body>
    </html>`);
});

// Crear una ruta /prueba que devuelva un html con un título h1 que diga "Ruta: Prueba"
app.get('/prueba', (req, res) => { // route handler)
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Prueba</title>
    </head>
    <body>
       <h1>Ruta: Prueba</h1>
    </body>
    </html>`);
});

// App escuchando en el puerto 3000
app.listen(3000);

// Ejecutar el servidor con el comando: node app.js
// Abrir el navegador en la dirección: http://localhost:3000/
// También podemos ejecutar el servidor con nodemon app.js para que se reinicie 
// automáticamente cada vez que guardemos un cambio en el código