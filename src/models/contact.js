const mongoose =require('mongoose')

const contact=mongoose.Schema({
    name:String,
    nationality:String,
    email:String,
    phone:String,
    message:String,
    subject:String

})
module.exports=mongoose.model("queries",contact)