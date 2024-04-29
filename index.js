const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGO_DB_CONFIG } = require("./config/app.config");
const http = require("http");
const server = http.createServer(app);
const { initMeetingServer } = require("./meeting-server");

// Inicializar el servidor de la reunión
initMeetingServer(server);

// Conectar a la base de datos MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_DB_CONFIG.DB,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((error) => {
    console.error("Error de conexión a la base de datos:", error);
  });

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

// Rutas de la API
app.use("/api", require("./routes/app.routes"));

// Configurar el puerto
const puerto = process.env.PORT || 4000;

// Escuchar en el puerto
server.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
