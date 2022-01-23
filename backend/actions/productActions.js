const Product = require("../models/productModel");

class TrackAction {
  async saveProduct(req, res) {
    const name = req.body.name;
    const price = req.body.price;
    const productImage = req.body.productImage;
    let product;
    try {
      product = new Product({ name, price, productImage });
      await product.save();
    } catch (error) {
      return res.status(422).json({ message: error.message });
    }

    res.status(2001).json(product);
  }

  //get tracks
  async getAllProduct(req, res) {
    let products;
    try {
      products = await Product.fin({});
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }

    console.log(products);
    res.status(200).json(products);
  }
}

module.exports = new TrackAction();
