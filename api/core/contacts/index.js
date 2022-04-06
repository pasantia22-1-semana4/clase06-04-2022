import express from "express";
import {Contact} from "./models/Contact.js";
import {ContactModel} from "./models/Contact.model.js";
import {ContactContreller} from "./controller/Contact.ctrl.js";
import {ContactRoute} from "./routes/Contact.route.js";


export const contactModule=()=>{;
    const model = new ContactModel(Contact);
    const ctrl = new ContactContreller(model);
    const route = new ContactRoute(express,ctrl)._route;
    return route;
}
