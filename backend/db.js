const mongoose = require('mongoose');
require('dotenv').config();
const mongo_uri = process.env.mongo_URI;

const connectDB= async () => {
    try{
        await mongoose.connect(mongo_uri);
        console.log('mongodb connected successfully')
    }
    catch(error){
        console.log('mongodb connection failed:',error)
    }
};

module.exports = connectDB;