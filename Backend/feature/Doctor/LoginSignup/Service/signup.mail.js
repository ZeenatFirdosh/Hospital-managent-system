 const nodemailer =require("nodemailer")
 require('dotenv').config();
 
require('../Service/signup.otp')

// doctor signup time sending mail for comformation
 let transporter =  nodemailer.createTransport({
    service:"Gmail",
    auth:{
      user: process.env.MAIL_FROM,
      pass: process.env.MAIL_PASS

    }    

})
 let SignupInvationmail = async (email , name)=>{

    

    let mailOptions={
      
      to: email,
      subject:"Sign up Mail",
      html:`<p>Hi ${name},  </p><br />
            <h3>Thank you for registring with us</h3>`
            
    }
    transporter.sendMail(mailOptions,()=>{console.log("mail sent sucessfully");})

 }

 //OTP mail sending 
 let sendotp = async (email, otp, name)=>{

    let mailoption ={

        from :"sltanush8@gmail.com",
        to:email,
        subject:"OTP sent ",
        html:`<h1>Hi ${name} OTP sent sucessfully ${otp}</h1>`
    }
    transporter.sendMail(mailoption,()=>{console.log("OTP mail sent sucessfully");})


 }
 

 module.exports={
    SignupInvationmail,
    sendotp
 }