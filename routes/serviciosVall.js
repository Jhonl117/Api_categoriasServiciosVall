const { Router } = require('express') //Desestructuración. Extraer un atributo de un objeto.

const route = Router()

//Importar métodos del controlador
const { registrarServicioGet, registrarServicioPost, registrarServicioPut, registrarServicioDelete } = require('../controllers/serviciosVall')

route.get('/', registrarServicioGet)

route.post('/', registrarServicioPost)

route.put('/', registrarServicioPut)

route.delete('/', registrarServicioDelete)

module.exports = route