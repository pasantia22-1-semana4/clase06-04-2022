import express from "express";
import morgan from "morgan";
import cors from "cors";

import {contactModule} from "./contacts/index.js"

export class Server{
    constructor(config){
        this._api = express();
        this._hostname=config.api.hostname;
        this._port=config.api.port;
        this._name=config.api.name;
        this.setMiddlewares();
        this.setRoutes();
    }

    setMiddlewares(){
        this._api.use(morgan('dev'));
        this._api.use(cors());
        this._api.use(express.json());
        this._api.use(express.urlencoded({extended:true}));
    }

    setRoutes(){
        this._api.use('/api/v1/contact', contactModule());
    }

    start(){
        try {
            this._api.set('trust proxy', this._hostname);
            this._api.listen(this._port,()=>{
                console.log(`${this._name} server is running on http://${this._hostname}:${this._port}`);
            })
        } catch (error) {
            console.log(error);
        }
    }
}