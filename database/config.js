const mongoose = require('mongoose') //Paquete que permite hacer transacciones desde mongo

//Establece la conexión de forma asíncrona
const dbConnection = async () => {
    //Es el bloque que hace captura de errores
    try {
        //Envía la conexión
        mongoose.connect(process.env.MONGO_CNN)
        console.log('Conexión exitosa a la base de datos de categorias y servicios')
    }
    catch (error) {
        //Atrapa el error
        console.log(error)
    }
}

//Exporta la cadena de conección
module.exports = { dbConnection }