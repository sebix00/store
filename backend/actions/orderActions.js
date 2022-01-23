const Order= require ("../models/orderModel");


class TrackAction{
    
    async saveOrder(req,res){
        const cart = req.body.cart;
        const adress = req.body.adress;
        const name = req.body.name;
        
        let order;
        try{
            order= new Order({cart,adress,name})
            await order.save();
            
        }catch(error){
            return res.status(422).json({message:error.message})
        }

        res.status(2001).json(order);
    }

}

module.exports = new OrderAction();