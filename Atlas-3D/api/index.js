const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3001;

// Middleware para entender archivos JSON
app.use(express.json());

// Ruta de prueba inicial
app.get('/', (req, res) => {
    res.send('¡El back funca!');
});

app.listen(PORT, () => {
    console.log(`Escuchando en ${PORT}`);
});