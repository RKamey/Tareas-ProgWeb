// Primero se importa el módulo 'express' y se guarda en la constante 'express'.
const express = require('express');
// Luego se crea una instancia de la aplicación de Express y se almacena en la constante 'app'.
const app = express();
// Se define una variable 'port' que obtiene el puerto del sistema operativo o usa el puerto 3000 si no se encuentra disponible.
let port = process.env.PORT || 3000;
// La aplicación utiliza el middleware 'express.static' para servir archivos estáticos en la ruta '/assets' 
// a partir de la carpeta 'public' ubicada en el directorio raíz de la aplicación.
app.use('/assets', express.static(__dirname + '/public'));

// La aplicación utiliza el middleware 'body-parser' para analizar el cuerpo de las solicitudes entrantes.
app.set('view engine', 'ejs');

// Se define un middleware para manejar cualquier solicitud en la raíz del servidor, que simplemente registra la URL solicitada 
// en la consola y llama a la siguiente función middleware.
app.use('/', (req, res, next) => {
    console.log(` Request URL: ${req.url}`);
    next();
});

// La aplicación define una ruta para manejar solicitudes en la raíz del servidor, que utiliza el método 'res.render' 
// para enviar el archivo HTML correspondiente a la vista 'index'.
app.get('/', (req, res) => {
    res.render('index');
});

// La aplicación define una ruta '/api' que devuelve un objeto JSON con el nombre y apellido de una persona.
app.get('/api', (req, res) => {
    res.json({ firstname: 'John', lastname: 'Doe'});
});

// La aplicación define una ruta '/person/:id' que utiliza el método 'res.render' para enviar el archivo HTML 
// correspondiente a la vista 'person' y el parámetro 'ID' que se obtiene de la URL.
app.get('/person/:id', (req, res) => {
    res.render('person', { ID: req.params.id });    
});

// Por último, la aplicación inicia el servidor en el puerto definido anteriormente utilizando el método 'app.listen'.
app.listen(port);