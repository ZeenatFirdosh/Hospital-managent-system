const mongoose =require("mongoose")


let PurchaseSchema = new mongoose.Schema({
    
MedicineCategory:{
    type:String,
    required:true

},
MedicineName:{
    type:String,
    required:true
},
Quantity:{
    type:Number,
    required:true
},
MRP:{
    type:Number,
    required:true
},
Discount:{
    type:Number
},
FinalPrice:{
    type:Number,
    required:true
}


})
module.exports=  new mongoose.model("purchase", PurchaseSchema)
