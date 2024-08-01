const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    fullname :  {
        type: String,
        minLenth: 3,
        trim:true
    },
    email :String,
    password :String,
    cart : {
    type: Array,
    default:[]
    },
    orders: {
    type: Array,
    default:[]
    },
    contact : Number,
    picture : String
})

module.exports =  mongoose.model("User", userModel);