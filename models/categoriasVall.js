const { Schema, model } = require('mongoose');

const RegistrarCategoriaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre de la categoria es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es es necesaria']
    },
    estado: {
        type: Boolean,
        required: [true, 'El estado es es necesaria']
    },
    observaciones: {
        type: String,
        required: [true, 'la observaciones no son necesaria']
    },
    IVA: {
        type: String,
        required: [true, 'el valor del IVA no son necesaria']
    },
    codigoCategoria: {
        type: Number,
        required: [true, 'la observación es necesaria']
    }
});

module.exports = model('RegistrarCategoria', RegistrarCategoriaSchema);