//Agragar GET, pos, PUT, DELETE
// probar con postman http://10ca1host:8080/api como html y anal izar
// probar con postman http://10ca1host:8080/api como json y anal izar

require('dotenv').config();

const Server = require('./models/server2');
const server = new Server();

server.listen();

