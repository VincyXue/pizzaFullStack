const express = require('express');
const cors = require('cors'); //解决两个localhost同时存在的问题
const Pizza = require('./Data/pizzaModel');
const Order = require('./Data/orderModel');

const app = express();
app.use(cors());
app.use(express.json());

async function getPizzaData() {
    try{
        const pizzaData = await Pizza.find({});
        return pizzaData;
    }
    catch(err){
        console.error('Error', err);
    }
};

async function submitOrder(order){
    try{
        const createOrder = await Order.create(order);
        console.log('Order saved successfully', createOrder)
    }
    catch(err){
        console.error('Error', err);
    }
};

app.get('/', async (req, res) => {
    try{
        console.log('I get the request!');
        const pizzaData = await getPizzaData();
        res.json(pizzaData)
    }
    catch(err){
        console.log('Error', err)
    }
});

app.post('/submit', async(req, res) => {
    const order = req.body;

    try{
        console.log(order);
        submitOrder(order)
    }catch(err){
        console.error('error', err)
    }
});

module.exports = app;
