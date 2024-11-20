import productService from "../service/productService.js";

class productController {
  service = new productService();

 
  getAllProducts = async (req, res) => {
    try {
      const data = await this.service.getAllProducts();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getProductById = async (req, res) => {
    try {
      const { id: product_id } = req.params;
      const data = await this.service.getProductById(product_id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };


  createProduct = async (req, res) => {
    try {
      const { product_name, price, categoryID } = req.body;
      const data = await this.service.createProduct({ product_name, price, categoryID });
      res.status(201).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };


  updateProduct = async (req, res) => {
    try {
      const { id: product_id } = req.params;
      const { product_name, price, categoryID } = req.body;
      const data = await this.service.updateProduct({ product_id, product_name, price, categoryID });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  
  deleteProduct = async (req, res) => {
    try {
      const { id: product_id } = req.params;
      const data = await this.service.deleteProduct(product_id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default productController;