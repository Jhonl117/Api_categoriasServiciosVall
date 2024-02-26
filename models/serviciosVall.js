const { Schema, model } = require('mongoose');

const RegistrarServicioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del Propietario es obligatorio']
    },
    precio: {
        type: Number,
        required: [true, 'El Precio es obligatorio']
    },
    duracion_aproximada: {
        type: String,
        required: [true, 'La Duración Aproximada es necesaria']
    },
    descripcion: {
        type: String,
        required: [true, 'La Descripción es necesaria']
    }
});

module.exports = model('RegistrarServicio', RegistrarServicioSchema);