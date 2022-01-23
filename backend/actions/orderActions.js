const Order= require ("../models/orderModel");


class OrderAction{
    
    async saveOrder(req,res){
        const cart = req.body.cart;
        const address = req.body.address;
        const name = req.body.name;
        
        let order;
        try{
            order= new Order({cart,address,name})
            await order.save();
            
        }catch(error){
            return res.status(422).json({message:error.message})
        }

        res.status(201).json(order);
    }

}

module.exports = new OrderAction();