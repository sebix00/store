const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    cart:{type: Object, required: true },
    address: {type:String, required:true},
    name:{type: String, required:true},
});

module.exports = mongoose.model('Order', orderSchema);