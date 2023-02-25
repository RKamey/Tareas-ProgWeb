// Importamos el módulo express
const express = require('express');
// Creamos una instancia de express
const app = express();

// Creamos un servidor HTTP
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Ponemos a escuchar el servidor en el puerto 3000
app.listen(3000);

// Ejecutamos el servidor con el comando node app.js
// Abrimos el navegador en http://localhost:3000
