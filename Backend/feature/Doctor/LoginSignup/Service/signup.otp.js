const bcryptjs =require("bcryptjs")

//Otp creation on login time
let otpcreate = async ()=>{

    let otp=Math.floor(Math.random()*899999+100000).toString();

    let salt = await bcryptjs.genSalt(10);

    let hashotp = await bcryptjs.hash(otp, salt)
   console.log(hashotp,otp);
    return{
        hashotp,
        otp
        
    }


}

module.exports={
    otpcreate
}