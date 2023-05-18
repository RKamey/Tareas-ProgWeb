const express = require('express'); // Inyectamos la dependencia de mongoose
const router = express.Router(); // Creamos una instancia de express router
const mongoose = require('mongoose'); // Inyectamos la dependencia de mongoose
let Person = require('../models/persons'); // Inyectamos el modelo de la base de datos de personas

// Ruta para el index
router.get('/', (req, res) => {
    res.render('index');
})

// Ruta para crear una persona (vista)
router.get('/gente', async (req, res) => {
     const Persons = await Person.find({});
     res.render('persons', {Persons});
    });

// Ruta para crear una persona (vista)
router.get('/addPerson', (req, res) => {
    res.render('addPerson');
});

// Ruta para crear una persona (proceso)
router.post('/addPerson', (req, res) => {
    // Creamos un objeto de tipo persona
    const newPerson = Person({
        nombre: req.body.nombre, 
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });
    // Guardamos el objeto en la base de datos
    newPerson
    .save()
    .then((data) => {res.redirect('gente')})
    .catch((error) => {res.json({message:error})});
})

// Ruta para eliminar una persona (proceso)
router.get('/deletePerson/:id', (req, res) => {
    Person.findByIdAndDelete(req.params.id)
    .then((data) => {res.redirect('/gente')})
    .catch((error) => {res.json({message:error})});
});

// Ruta para filtrar una persona
router.post('/find', (req, res) => {
    Person.find({ nombre: { $regex: req.body.criteria, $options: "i"}})
    .then((Persons)=>{res.render('persons', {Persons})})
    .catch((error)=>{res.json({message:error})})
});

// Ruta para actualizar una persona (vista)
router.get('/findById/:id', (req, res) => {
    Person.findById(req.params.id)
    .then((myPerson) => {res.render('personUpdate', {myPerson})})
    .catch((error) => {res.json({message:error})});
});

// Ruta para actualizar una persona (proceso)
router.post('/updatePerson', (req, res) => {
    Person.findByIdAndUpdate(req.body.objId,
        {
            nombre: req.body.nombre,
            edad: req.body.edad,
            tipoSangre: req.body.tipoSangre,
            nss: req.body.nss
        })
    .then((data) => {res.redirect('/gente')})
    .catch((error) => {res.json({message:error})});
});
// Exportamos el modulo de rutas
module.exports = router;