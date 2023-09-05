const{Schema, model} = require('mongoose')
const bcrypt =require('bcryptjs')

const doctorsignup = new Schema({
  name:{
    type:String,
    required:[true, "name is mandatory"]
  },
    
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    hashotp:{
      type:String,
      default:null

    }


},
{timestamps:true}

)

//& password bcrypt
doctorsignup.pre("save", async function (next){
  
  let salt = await bcrypt.genSalt(10);
  this.password= await bcrypt.hash(this.password, salt)

}  )

//& compare bcrypt password

doctorsignup.methods.compareMypassword= async function (password){

  let comparepass = await bcrypt.compare(password, this.password)

  return comparepass

  
}

module.exports = new model("doctor", doctorsignup)