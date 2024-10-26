const express = require('express');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT; //port ahora es visible a toda la aplicación

        //Midde1ewares: Funciones que agrega mas funcionalidades
        this.middlewares();

       //LLamado de el método routes() para que se ejecute
        this.routes();
    }
    //Midd1ewares sirver para darle mas funcionalidades al WebServer
    middlewares() {
        //Directorio Publico
        this.app.use(express.static('public'))
    }

    routes() {
        //end-point funcional si dejara solamente con Ia ruta pricipal no funcionaria
        //debido que implicitamente esa ruta principal se encuentra el this.app.use
        this.app.get('/api',(req,res) =>{
            res.send('Hello Worl')
        });
    }

    // Este método sirve para controlar la escucha del servidor
    listen(){
        this.app.listen(this.port, () =>{
            console. log( 'Servidor corriendo en puerto ', this. port);
        });
    }

}
   

module.exports = Server;