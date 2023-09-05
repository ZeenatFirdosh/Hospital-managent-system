let express =require("express");
const { medicinesold, getsoldmedicine } = require("../Controller/purchase.controller");


let routes = express.Router();

routes.post("/soldmedicine", medicinesold)
routes.get("/getpurchasemedicne", getsoldmedicine)


module.exports =routes;