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
        required: [true, 'La descripción es es necesaria']
    },
    observacion: {
        type: String,
        required: [true, 'la observación es necesaria']
    }
});

module.exports = model('RegistrarCategoria', RegistrarCategoriaSchema);