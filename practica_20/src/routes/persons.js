const express = require('express'); // Inyectamos la dependencia de mongoose
const router = express.Router(); // Creamos una instancia de express router
const mongoose = require('mongoose'); // Inyectamos la dependencia de mongoose
let Person = require('../models/persons'); // Inyectamos el modelo de la base de datos de personas

router.get('/', (req, res) => {
    res.render('index');
})

// Ruta para crear una persona
router.get('/gente', async (req, res) => {
     const Persons = await Person.find({});
     res.render('persons', {Persons});
    });

router.get('/addPerson', (req, res) => {
    res.render('addPerson');
});

router.post('/addPerson', (req, res) => {
    const newPerson = Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });

    newPerson
    .save()
    .then((data) => {res.redirect('gente')})
    .catch((error) => {res.json({message:error})});
})

// Exportamos el modulo de rutas
module.exports = router;