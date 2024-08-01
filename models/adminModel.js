const mongoose = require('mongoose');

  
const adminModel = mongoose.Schema({
    fullname :  {
        type: String,
        minLenth: 3,
        trim:true
    },
    email :String,
    password :String,
    products: {
    type: Array,
    default:[]
    },
    picture : String,
    gstin: Number
})


module.exports =  mongoose.model(" Admin", adminModel);