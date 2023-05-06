// Inyectamos la dependencia de mongoose
const mongoose = require('mongoose');
// Creamos el esquema de la base de datos para las personas
let PersonSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    tipoSangre: String,
    nss: String
});

// Exportamos el modelo de la base de datos
module.exports = mongoose.model('Persons', PersonSchema);