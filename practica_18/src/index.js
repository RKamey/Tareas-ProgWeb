// Inyectamos la dependencia express
const express = require('express');
// Inyectamos la dependencia mongoose
const mongoose = require('mongoose');
// Inyectamos la dependencia dotenv
require("dotenv").config();

// Creamos una instancia de express
const app = express();

// Definimos el puerto de escucha
const port = process.env.PORT || 4000;

// Definimos el endpoint raíz
app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

// Conectamos a la base de datos de MongoDB Atlas
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.error(error));

// Iniciamos el servidor en el puerto 4000 y mostramos un mensaje en consola
app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));

