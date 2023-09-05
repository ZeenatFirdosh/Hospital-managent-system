
const express =require ("express");
const { doctorsignup, doctorlogin, getalldoctor, getsingledoctor, deletedoctor } = require("../Controller/Signup.controller");


let routes = express.Router();

routes.post('/adddoctor', doctorsignup)
routes.post('/login',doctorlogin )
routes.get('/getalldoctor', getalldoctor)
routes.get('/singledoctor', getsingledoctor)
routes.delete('/deletedoctor', deletedoctor)

 

module.exports = routes