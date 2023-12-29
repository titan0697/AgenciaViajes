import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('Inicio');
});

router.get('/nosotros', (req, res) => {

    const viajes = 'Viaje a Alemania';
    res.render('nosotros', {
        textoViajes: viajes
    });

});

router.get('/contacto', (req, res) => {
    res.send('contacto');
});

export default router;