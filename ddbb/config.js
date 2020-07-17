const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        // db connection
        await mongoose.connect(process.env.DB_CONNECTION, 
            {
                useNewUrlParser: true, 
                useUnifiedTopology: true,
                useCreateIndex: true
            });
            console.log('Conectado a la BBDD!!')
        } catch (error) {
        throw new Error('Error en la conexión a la base de datos!!');
    }
}

module.exports = {
    dbConnection
}
