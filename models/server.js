const cookieParser = require('cookie-parser') //Guardar datos(Encriptar) Ej: los datos de un login
const express = require('express') //Permite ejecutar(Servidor de node), framework de node
const cors = require('cors') //Implementa seguridad
const bodyParser = require('body-parser')//Recibir datos de un formulario html
const { dbConnection } = require('../database/config') //Conexión

class server {
    constructor() {
        this.app = express() //Utiliza el express
        this.port = process.env.PORT //Captura la variable del puerto para la conexión
        this.categoriasVallPath = '/api/categoriasVall' //Ruta para la api usuario(Ruta pública)
        this.serviciosVallPath = '/api/serviciosVall' //Ruta para la api usuario(Ruta pública)
        this.middlewares() //Puente para conectar base de datos
        this.conectarDB() //Conectar a la base de datos
        this.routes()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

    middlewares() {
        this.app.use(cookieParser())
        this.app.use(express.static(__dirname + "/public"))
        this.app.use(cors())
        this.app.use(bodyParser.json()) //para parsear aplicaciones a json
    }

    routes() {
        this.app.use(this.categoriasVallPath, require('../routes/categoriasVall'))
        this.app.use(this.serviciosVallPath, require('../routes/serviciosVall'))
    }

    //Funciones asíncronicas. Siempre que hay asincrónico hay un await
    async conectarDB() {
        await dbConnection() //Esperar la respuesta del servidor
    }
}

module.exports = server