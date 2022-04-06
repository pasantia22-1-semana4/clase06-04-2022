import {contactsData} from "../../../db/data.js";

export class ContactModel{
    constructor(entity){
        this._entity=entity;
    }

    all(){
        return contactsData;
    }
    
    findByName(name,apellido){
        return contactsData.filter(contact=>contact.name.toLocaleLowerCase()===name.toLocaleLowerCase()).find(contact=>contact.lastname.toLocaleLowerCase()===apellido.toLocaleLowerCase());
        // return contactsData.find(contact=>contact.name.toLocaleLowerCase()==name.toLocaleLowerCase());
    }
       

    findByAge(){

    }

}
