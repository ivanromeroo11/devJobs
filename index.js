const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.send('Funciona');
})

app.listen(5000);