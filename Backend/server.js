let express =require('express');
const routes = require('./feature/Doctor/LoginSignup/Router/Signup.routes');
const medicineroutes = require("./feature/Pharmacy/Medicine/Router/Medicine.routes")
const purchaseroutes =require("./feature/Pharmacy/Purchase/Router/purchase.routes")
require('dotenv').config();
const cors =require('cors')
require('./Config/DBConnection')

//application middleware
 let app =express();
// when we reaced data from mandatory it should be json formate
app.use(express.json())

app.use(cors())
app.use(express.static("./public"))

//API for doctor module
app.use("/api/doctor", routes)
app.use("/api/medicine", medicineroutes)
app.use("/api/purchase", purchaseroutes)

// if user enter wrong url on the given  this will execute
 app.use("*", (req, res, next)=>{
    res.status(404).json("Page n found")
 })

//Error handlin middleware
 app.use((err,req, res, next)=>{
    res.status(400).json({error:true, message:err.message,data:"error data"})
 })
//registor and creatation of port number
 app.listen(process.env.PORT, ()=>{
    console.log(`server running sucessfully ${process.env.PORT}`);
 })