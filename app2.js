//crear carpeta models
//dentro de la carpeta models crear server. js
//crear carpeta publica
// index. html dentro de public
// configurar milddware y / api y routes en server. js
// probar con postman http://10ca1host:8080/api y anal izar

require('dotenv').config();

const Server = require('./models/server');
const server = new Server();

server.listen();

