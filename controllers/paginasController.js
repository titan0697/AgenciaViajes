import { Viaje } from "../models/viaje.js";
import { Testimonial } from "../models/testimoniales.js";

const paginaInicio = async (req, res) => {

    //consultar 3 viajes del modelo

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({ limit: 3 }));
    promiseDB.push(Testimonial.findAll({ limit: 3 }));
    try {

        const resultado = await Promise.all(promiseDB)
        res.render('Inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {

    }
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {

    // consulta bd

    const viajes = await Viaje.findAll();
    console.log("333333333333333333333333333", viajes)

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes: viajes
    });
}

const paginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Comentarios',
            testimoniales
        });

    } catch (error) {

    }
}

//muestra viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    try {
        const { slug } = req.params;
        console.log(`Received slug: ${slug}`);

        const viaje = await Viaje.findOne({ where: { slug } });

        if (!viaje) {
            console.error(`No matching record found for slug: ${slug}`);
            return res.status(404).send('Not Found');
        }

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje: viaje
        });
    } catch (error) {
        console.error('Error fetching viaje:', error);
        res.status(500).send('Internal Server Error');
    }
};




export {
    paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje
}