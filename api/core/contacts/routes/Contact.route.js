export  class ContactRoute{
    constructor(express,controllers){
        this._route = express.Router();
        this._ctrl = controllers;
        this.registerRoutes();
    }

    registerRoutes(){
        this._route.get('/', this.handlerContacts.bind(this));
    }

    async handlerContacts(req, res){
        
    }
}