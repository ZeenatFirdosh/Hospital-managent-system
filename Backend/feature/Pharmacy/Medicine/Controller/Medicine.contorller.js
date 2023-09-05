const Medicine =require("../Models/Medicine.models")

let AddMedicine = async (req,res,next)=>{
try{
   
      let {MedicineName, MedicineCategory,MedicineCompany, MedicineShortName, MedicineGroup,Unit,MRPPrice,Discount,FinalPrice, Note,Image}=req.body;
     
         
        let port = "http://localhost:4000"
          let path = req.file.path.split("public")[1];
         let imagepath = port +path ;

            let medicinedetails = await Medicine.create({MedicineName, MedicineCategory,MedicineCompany, MedicineShortName, MedicineGroup,Unit,MRPPrice,Discount,FinalPrice, Note,Image:imagepath})
            return res.status(201).json({error:false, message:"medicine added sucessfully", data:medicinedetails})
      

         
    }
catch(err){
    next(err)
}

}

let getallmedicine = async (req,res,next)=>{

    try{
        let allmedicine = await Medicine.find({},{_id:0})
if(allmedicine){
    return res.status(200).json({error:false, message:"medicine fetched sucessfully", data:allmedicine})
}
return res.status(400).json({error:true, message:"no medicine found", data:null})
        

    } 
     catch(err){
        next(err)
     }

}

let deleteMedicine = async( req, res, next)=>{
try{
    let {MedicineName}=req.body;

    let isAvailabename = await Medicine.findOneAndDelete({MedicineName})

    if(!isAvailabename){
      return res.status(400).json({error:true, message:"No medicinefound given name",data:null})
    }

    return res.status(200).json({error:false,message:"Medicine fetched sucessfully" , data:isAvailabename})
}

catch(err){
    next(err)
}

}



module.exports={
    AddMedicine,
    getallmedicine,
    deleteMedicine
}