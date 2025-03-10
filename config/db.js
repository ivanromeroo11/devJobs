const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE)
    .then(() => console.log('Conexión a MongoDB exitosa'))
    .catch((error) => console.error('Error de conexión a MongoDB:', error));

mongoose.connection.on('error', (error) => {
    console.error('Error de conexión a MongoDB:', error);
});

// Importar los modelos aquí
require('../models/Vacantes');
// require('../models/YourModel'); // Comentar o eliminar esta línea si no tienes un modelo específico