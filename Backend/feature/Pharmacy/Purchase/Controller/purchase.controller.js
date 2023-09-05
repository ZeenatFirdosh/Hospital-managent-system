const MedicinePurchase =require("../Models/purchase.models")



let medicinesold = async (req, res, next)=>{
  
    try{
        let {MedicineCategory,MedicineName,Quantity,MRP,Discount,FinalPrice}= req.body;

        let Purchase = await MedicinePurchase.create({MedicineCategory,MedicineName,Quantity,MRP,Discount,FinalPrice})

        return res.status(200).json({error:false, message:"data added sucessfully", data:Purchase})
    }
    catch(err){
        next(err)
    }

    

}

let getsoldmedicine = async(req,res,next)=>{

    try{
           let allsoldmedicine = await MedicinePurchase.find({})

           if(allsoldmedicine){
            return res.status(200).json({error:false, message:"get all purchase medicuine", data:allsoldmedicine})
           }

           return res.status(400).json({error:true, message:"failed to feth the data", data:null})
    }
    catch(err){
        next(err)
    }
}


module.exports ={
    medicinesold,
    getsoldmedicine
}