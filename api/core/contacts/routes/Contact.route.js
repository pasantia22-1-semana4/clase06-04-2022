export  class ContactRoute{
    constructor(express,controllers){
        this._route = express.Router();
        this._ctrl = controllers;
        this.registerRoutes();
    }

    registerRoutes(){
        this._route.get('/', this.handlerContacts.bind(this));
    }

    handlerContacts(req, res){
       // console.log(Object.keys(req.query).length);
       let result=''; 
       if(Object.keys(req.query).length>0){
            result= this._ctrl.queryContact(req.query);
        }else{
            result = this._ctrl.getContacts();
        }

       res.status(200).json(result);
    }
}