const express = require('express');
const routes = require('./routes');
const path = require('path');

//crea una app de express
const app = express();

//habilitar pug como themplate engine
app.set('view engine', 'pug');

//añadir la caprte de la vistas
//el dirname es el directorio actual de la app y solo le agregamos la caprte views
app.set('views', path.join(__dirname, './views'));

//aqui le decimos que use routes como el archivo de las rutas y los parentesis
//son porque exporta una funcion
app.use('/', routes());

app.listen(3000);