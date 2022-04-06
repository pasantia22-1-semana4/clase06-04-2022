export class ContactContreller{
    constructor(model){
        this._model=model;
    }

    
    getContacts(){
        return this._model.all();
    }

    queryContact(q){

        let {name,apellido,age}=q;
        if(name){
            return this._model.findByName(name);
        }

        if(age){
            return this._model.findByAge(age);
        }
        
        
        return this._model.findByName(name,apellido);
    }
    

}   