const express = require('express');
const routes = require('./routes');


//crea una app de express
const app = express();
//aqui le decimos que use routes como el archivo de las rutas y los parentesis
//son porque exporta una funcion
app.use('/', routes());

app.listen(3000);