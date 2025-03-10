const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const router = require('./routes');

require('dotenv').config({ path: 'variables.env' });

const app = express();

// Habilitar handlebars como template engine
app.engine('handlebars', engine({
    defaultLayout: 'layout'
}));
app.set('view engine', 'handlebars');

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router());

app.listen(process.env.PUERTO);