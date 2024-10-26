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
        //ERRORES 400 Y see
        //Deben de ser muy bien trabajados por parte del diseäador
        // ya que hay que darle informaciön a las personas del Front-End
        //porque el Back-End estå enviando un error.
        //Genera1mente los errores de servidor es recomendable
        //desarrollar logs para darnos mås informaciön.
        // Los errores del cliente no son responsabilidad nuestra
        // Los errores del servidor hay que colocar la atenciön debida

        //end-point GET ejemplo text
        // Peticiön de recursos
        this.app.get('/api0',(req,res) =>{
            res.json({
                ok: true,
                msg: 'get API'
            })
        });

        //end-point PUT ejemplo text
        //Para actualizar registros
        this.app.put('/api0',(req,res) =>{
            res.status(400).json({
                ok: true,
                msg: 'put API'
            })
        });

        //end-point POST ejemplo text
        //Para crear nuevos recursos como un usuario
        this.app.post('/api0',(req,res) =>{
            res.status(201).json({
                ok: true,
                msg: 'post API2'
            })
        });

        // end-point DELETE ejemplo text
        // Borrar algo, pero puede para el usuario que se borro
        // pero a nivel de base de datos se actualizo
        this.app.delete('/api0',(req,res) =>{
            res.json({
                ok: true,
                msg: 'delete API2'
            })
        });

        //PATCH
        this.app.patch('/api0',(req,res) =>{
            res.json({
                ok: true,
                msg: 'patch API2'
            })
        });

        // end-point ejemplo text
        this.app.get('/api',(req,res) =>{
            res.send('Hello Word Text')
        });

    //end-point ejemplo json
    this.app.patch('/api0',(req,res) =>{
        res.json({
            ok: true,
            msg: 'get API2'
        })
    });

    // end-point , 403 cuando se hace un llamado i legal
    //peticion o autorizada
    this.app.patch('/api3',(req,res) =>{
        res.status(403).json({
            ok: true,
            msg: 'get API3'
        })
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