const Product = require("../models/productModel");


class ProductAction {
  async saveProduct(req,res){
    const name = req.body.name;
    const price = req.body.price;
    const productImage= req.body.productImage;

    let product;
    try{
        product = new Product({name,price,productImage});
        await product.save();

    }catch(err){
        return res.status(422).json({message:err.message});
    }

    

       res.status(201).json(product);
   }

  //get tracks
  async getAllProduct(req, res) {
    let products;
    try {
      products = await Product.find({});
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }

    console.log(products);
    res.status(200).json(products);
  }
}

module.exports = new ProductAction();
