class Server{
    constructor(){
        this. app = express();
        this. port = process . env. PORT;

        //Midde1ewares .Funcionaes que agrega mas funcionalidades
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    middlewares() {
        //Directorio Publico
        //end-point ejemplo
        this.app.get( '/api',(req,res) =>{
            res.send( 'Hello Worl')
        });
    }

    listen(){
        this.app.listen(this.port, () =>{
            console. log( 'Servidor corriendo en puerto ', this. port);
        });
    }

}
   