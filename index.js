require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./ddbb/config');

const port = process.env.PORT;

// Crear el servidor express
const app = express();

// Condigurar CORS
app.use( cors() );

// Conectar a la base de datos
dbConnection();

app.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Todo Ok.'
    })
})

app.listen( port, () => {
    console.log('Servidor Express corriendo correctamente en el puerto ' + port)
});
