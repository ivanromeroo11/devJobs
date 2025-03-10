const mongoose = require('mongoose');
require('./config/db');
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const router = require('./routes');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');


require('dotenv').config({ path: 'variables.env' });

const app = express();

// Habilitar handlebars como template engine
app.engine('handlebars', engine({
    defaultLayout: 'layout'
}));
app.set('view engine', 'handlebars');

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());

app.use(session({
    secret: process.env.SECRETO,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE })
}));

app.use('/', router());

app.listen(process.env.PUERTO);