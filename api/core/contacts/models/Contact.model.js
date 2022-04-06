import {contactsData} from "../../../db/data.js";

export class ContactModel{
    constructor(entity){
        this._entity=entity;
    }

    all(){
        return contactsData;
    }
    
    async findByName(){

    }
       

    findByAge(){

    }

}
