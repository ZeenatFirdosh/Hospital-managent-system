const express = require("express");
const { AddMedicine, deleteMedicine, getallmedicine } = require("../Controller/Medicine.contorller");
const multer =require("multer")


let routes = express.Router();

//image upload start code
const mystorage = multer.diskStorage({
    
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
      },
      filename: function (req, file, cb) {
        
        cb(null, file.originalname)
      }
})

const upload = multer({ storage: mystorage })
//image upload end code


routes.post("/addmedicine", upload.single("Image"), AddMedicine)
routes.get("/getmedicine", getallmedicine)
routes.delete("/deletemedicine", deleteMedicine)


module.exports=routes