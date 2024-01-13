const mongoose = require('mongoose');
const {Schema} = mongoose
// schema
const userSchema = new Schema({
    id:Number,
    name:String,
    email:String,
    password:String
},{timestamps:true});

const User = mongoose.model('User',userSchema)

module.exports = User;