const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const router = require('./routes');

const app = express();

// Habilitar handlebars como template engine
app.engine('handlebars', engine({
    defaultLayout: 'layout'
}));
app.set('view engine', 'handlebars');

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router());

app.listen(5000, () => {
    console.log('Servidor escuchando en el puerto 5000');
});