const { MongoClient } = require('mongodb');

// URL de conexión a tu base de datos MongoDB
const url = 'mongodb://localhost:27017/meeting-app';

// Crear una instancia de MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Conectar al servidor de MongoDB
client.connect((err) => {
    if (err) {
        console.error('Error al conectar a MongoDB:', err);
        return;
    }
    console.log('Conexión establecida correctamente a MongoDB');

    // Exportar la configuración de la base de datos MongoDB


    // A partir de aquí, puedes realizar operaciones en la base de datos
});
module.exports = {
    MONGO_DB_CONFIG: {
        DB: url // Puedes exportar la URL directamente si lo deseas
    }
};