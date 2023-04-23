const express = require('express'); // Inyectamos la dependencia de express
const mongoose = require('mongoose'); // Inyectamos la dependencia de mongoose
const personsRoutes = require('./routes/persons'); // Inyectamos las rutas de personas
require('dotenv').config(); // Inyectamos la dependencia de dotenv

mongoose.Promise = global.Promise; // Configuramos mongoose para que use las promesas nativas de javascript
const app = express(); // Creamos una instancia de express
const port = process.env.PORT || 3000; // Configuramos el puerto de la aplicacion

app.set('view engine', 'ejs'); // Configuramos express para que use ejs como motor de plantillas
app.use(express.urlencoded({ extended: false })); // Configuramos express para que use el body parser
app.use(personsRoutes);// Configuramos express para que use las rutas de personas

// Configuramos la conexion a la base de datos de mongo db atlas
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas!'))
    .catch(error => console.error(error));

// Configuramos el servidor para que escuche en el puerto 3000
app.listen(port, () => console.log(`Server running on port ${port}`));