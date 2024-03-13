const dotenv = require('dotenv')
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB).then(() => {console.log('DB connection.')})

const pizzaSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Must have a Pizza Name'],
    },
    ingredients: {
        type: String,
        required: [true, 'Must have Ingredients'],
    },
    price: {
        type: Number,
        required: [true, 'Must have Price']
    },
    photoName: {
        type: String
    },
    soldOut:{
        type: Boolean,
        required: [true, 'Must have soldout or not']
    }
})

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;
