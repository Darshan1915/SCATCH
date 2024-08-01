const mongoose = require('mongoose');

const productModel = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    discount:{
        type:Number,
        default: 0
    },
    bgcolor:String,
    panecolor: String,
    rextcolor: String
})


module.exports =  mongoose.model(" Product", productModel);