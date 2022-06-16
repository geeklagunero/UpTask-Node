const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

//crea una app de express
const app = express();

//habilitar pug como themplate engine
app.set('view engine', 'pug');

//añadir la caprte de la vistas
//el dirname es el directorio actual de la app y solo le agregamos la caprte views
app.set('views', path.join(__dirname, './views'));
//seteamos la carpeta publica para lso archivos estaticos
app.use(express.static('public'));


//habilitar body parser para leer los datos de los formularios
app.use(bodyParser.urlencoded({ extended: true }));

//aqui le decimos que use routes como el archivo de las rutas y los parentesis
//son porque exporta una funcion
app.use('/', routes());

app.listen(3000);