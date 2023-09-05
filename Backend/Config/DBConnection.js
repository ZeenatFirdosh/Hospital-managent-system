let {connect}= require("mongoose")
require("dotenv").config();
connect(process.env.DEV_URL).then(()=>{
    console.log("Mongodb connectd sucessfully");
}).catch((err)=>{
    throw err;
})