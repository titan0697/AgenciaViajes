import express from 'express';
import router from './routes/index.js';
import db from './config/db.js'

const app = express();

//conectar base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch(error => console.log(error));

const port = process.env.PORT || 4000;

//habilitar PUG
app.set('view engine', 'pug');

//middleware, obtner año actual
app.use((req, res, next) =>{
   const year = new Date();
    res.locals.actualAnio = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes'
    next();
})

// agregar body parser para leer datos del form
app.use(express.urlencoded({extended: true}));

//definir carpeta public
app.use(express.static('public'));

//agregar router
app.use('/', router);

app.listen(port, () =>{
    console.log(`el servidor esta corriendo en el puerto ${port}`)
})