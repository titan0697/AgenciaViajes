import express from 'express';
import router from './routes/index.js';

const app = express();

const port = process.env.PORT || 4000;

//habilitar PUG
app.set('view engine', 'pug');

//definir carpeta public
app.use(express.static('public'));

//agregar router
app.use('/', router);

app.listen(port, () =>{
    console.log(`el servidor esta corriendo en el puerto ${port}`)
})