const dotenv = require('dotenv')
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB).then(() => {console.log('DB connection.')})

const orderSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    address: {
        type: String,
    },
    contact: {
        type: String,
    },
    selectedPizza: {
        type: String
    },
    specialRequest:{
        type: String,
    }
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
