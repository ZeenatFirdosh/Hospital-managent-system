const mongoose =require("mongoose")


let MedicalSchema = new mongoose.Schema({
    MedicineName :{
        type:String,
        required:true
    },
    MedicineCategory:{
        type:String,
        required:true
    },
    MedicineCompany:{
        type:String,
        required:true
    },
    MedicineShortName:{
        type:String,
    },
    MedicineGroup:{
        type:String,
        required:true
    },
    Unit:{
        type:Number,
        required:true
    },
   MRPPrice:{
        type:Number,
        required:true
    },
    Discount:{
        type:Number,
    },
    FinalPrice:{
        type:Number,
        required:true
    },
    Note:{
        type:String,
        
    },
    Image:{
        type:String
    },
    
},{timestamps:true}
)




module.exports = new mongoose.model("medicine", MedicalSchema)