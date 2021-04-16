///////////////////////////////////////////////////////////////
///
///                  Code by Greg K Limo
///     Visit        www.greglimo.com
///                  FEB 2021
///
///__________________************______________________________

const mongoose = require('mongoose');
const { Schema } = mongoose;

///////////////////////////////////////////////////////////
///  Defining the User Schema
///________________************____________________________
const userSchema = new Schema({
    password: String,
    imageUrl: String,
    email: String,
    phone: Number,
    Address: String,
    creation_date: {
        type: Date
    },
    modification_date: {
        type: Date
    },

})
const User = mongoose.model('user', userSchema)

///////////////////////////////////////////////////////////
///  Defining the Merchant Schema
///________________************____________________________
const merchantSchema = new Schema({
    password: String,
    imageUrl: String,
    email: String,
    phone: Number,
    Address: String,
    whatsappLink: String,
    companyName: String,
    status: String,
    creation_date: {
        type: Date
    },
    modification_date: {
        type: Date
    },

})
const Merchant = mongoose.model('merchant', merchantSchema)

///////////////////////////////////////////////////////////
///  Defining the orders Schema
///________________************____________________________
const ordersSchema = new Schema({
    totalAmount: Number,
    userId: String,
    productId: Array,
    Address: String,
    status: String,
    storeId: String,
    creation_date: {
        type: Date
    },
    modification_date: {
        type: Date
    },

})
const Orders = mongoose.model('orders', ordersSchema)

///////////////////////////////////////////////////////////
///  Defining the cart Schema
///________________************____________________________
const cartSchema = new Schema({
    totalAmount: Number,
    userId: String,
    products: Array,
    creation_date: {
        type: Date
    },
    modification_date: {
        type: Date
    },

})
const Cart = mongoose.model('cart', cartSchema)

///////////////////////////////////////////////////////////
///  Defining the product Schema
///________________************____________________________
const productSchema = new Schema({
    imageUrl: String,
    price: Number,
    name: String,
    description: String,
    store_id: String,
    creation_date: {
        type: Date
    },
    modification_date: {
        type: Date
    },

})
const Product = mongoose.model('product', productSchema)



module.exports = {
    User,
    Merchant,
    Orders,
    Cart,
    Product
}