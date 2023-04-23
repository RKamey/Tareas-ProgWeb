const express = require('express'); // Inyectamos la dependencia de mongoose
const router = express.Router(); // Creamos una instancia de express router
const mongoose = require('mongoose'); // Inyectamos la dependencia de mongoose
let Person = require('../models/persons'); // Inyectamos el modelo de la base de datos de personas

// Ruta para crear una persona
router.get('/gente', async (req, res) => {
     const Persons = await Person.find({});
     res.json(Persons);
    });

// Exportamos el modulo de rutas
module.exports = router;