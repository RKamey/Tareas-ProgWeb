//Inyección de la dependencia express
const express = require('express');
// Instanciación del "router" al que asociaremos todas
let router = express.Router();

// Definición de la ruta raíz
router.get('/person', (req, res) => {
    res.render('person');
});

// Exportamos el router para que pueda ser utilizado
module.exports = router;
