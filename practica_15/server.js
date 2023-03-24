// Importamos el módulo express
const express = require('express');
// Creamos una instancia de express
const app = express();
// Definimos el puerto
let port = process.env.PORT || 3000;
// Definimos la ruta de los archivos estáticos
app.use('/assets', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false}));
// Definimos el motor de plantillas
app.set('view engine', 'ejs');
// Definimos la ruta de las plantillas
app.get('/', (req, res) => {
    cad = `<!DOCTYPE html> <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Index</title>
        <link rel="stylesheet" href="/assets/style.css" type="text/css">
    </head>
    <body>
        <h1 class="hello-world">Hello world!</h1>

        <a href="/student" class="button">Ir al formulario</a>
    </body>
    </html>`;

    res.send(cad);
});
// Defnimos la ruta student que tiene el formulario
app.get('/student', (req, res) => {
    let t = req.params.id;
    res.render('student');
});

// Definimos la ruta addStudent que recibe los datos del formulario
app.post('/addStudent', (req, res) => {
    res.render('displayData',{      nombre: req.body.nombre,
                                    edad: req.body.edad,
                                    nss: req.body.nss,
                                    tipoSangre: req.body.tipoSangre});
});

// Iniciamos el servidor
app.listen(port);