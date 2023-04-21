const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app=express();
        this.port=process.env.PORT;

        this.usersPath = '/api/users';

        //Middlewares
        this.middlewares();


        //Routes
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes(){
        /* this.app.get('/', (req, res)=>{
            res.send('08_RestServer')
        }); */

        this.app.use(this.usersPath, require('../routes/user.router'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Listening port ${this.port}`)
        });
    }


}

module.exports=Server;