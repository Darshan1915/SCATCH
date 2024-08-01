const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/SCATCH")
        console.log("DB connected");
    } catch (error) {
        console.error("DB connection error:", error);
    }
};

module.exports = connectDB;