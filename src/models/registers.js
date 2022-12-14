const mongoose =require("mongoose");
// console.log("add")
const userSchema= new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
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
    confirmpassword:{
        type:String,
        required:true
    }
})

const Register= new mongoose.model("Register",userSchema);
module.exports=Register;