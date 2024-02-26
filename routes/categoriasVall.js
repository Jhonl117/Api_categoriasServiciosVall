const { Router } = require('express') //Desestructuración. Extraer un atributo de un objeto.

const route = Router()

//Importar métodos del controlador
const { registrarCategoriaGet, registrarCategoriaPost, registrarCategoriaPut, registrarCategoriaDelete } = require('../controllers/categoriasVall')

route.get('/', registrarCategoriaGet)

route.post('/', registrarCategoriaPost)

route.put('/', registrarCategoriaPut)

route.delete('/', registrarCategoriaDelete)

module.exports = route