const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
    try {
        await mongoose.connect(`${config.get("MONGODB_URI")}/SCATCH`)
        console.log("DB connected");
    } catch (error) {
        console.error("DB connection error:", error);
    }
};

module.exports = connectDB;