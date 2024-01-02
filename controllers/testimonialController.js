import { Testimonial } from "../models/testimoniales.js";

const guardarTestimoniales = async (req, res) => {

    //validar
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if (nombre.trim() === '') {
        errores.push({ mensaje: 'nombre vacio' });
    }

    if (correo.trim() === '') {
        errores.push({ mensaje: 'correo vacio' });
    }

    if (mensaje.trim() === '') {
        errores.push({ mensaje: 'mensaje vacio' });
    }

    if (errores.length > 0) {

        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Comentarios',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else {
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })

            res.redirect('/testimoniales')
        } catch (error) {

        }
    }
}


export { guardarTestimoniales }