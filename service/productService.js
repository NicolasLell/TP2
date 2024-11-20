import Product from "../models/product.js";

class ProductService {
  getAllProducts = async () => {
    try {
      const products = await Product.findAll({
        attributes: ["product_id", "product_name", "price", "categoryID"],
      });
      return products;
    } catch (error) {
      throw error;
    }
  };

  getProductById = async (product_id) => {
    try {
      const product = await Product.findOne({
        where: { product_id },
        attributes: ["product_id", "product_name", "price", "categoryID"],
      });

      if (!product) {
        throw new Error("Product not found.");
      }

      return product;
    } catch (error) {
      throw error;
    }
  };

  createProduct = async (product) => {
    try {
      const newProduct = await Product.create(product);
      return newProduct;
    } catch (error) {
      throw error;
    }
  };

  updateProduct = async (data) => {
    try {
      const { product_id, product_name, price, categoryID } = data;
      const updatedProduct = await Product.update(
        { product_name, price, categoryID },
        {
          where: { product_id },
        }
      );

      if (updatedProduct[0] === 0) {
        throw new Error("Product not found or no changes made.");
      }

      return { message: "Product updated successfully." };
    } catch (error) {
      throw error;
    }
  };

  deleteProduct = async (product_id) => {
    try {
      const deleted = await Product.destroy({
        where: { product_id },
      });

      if (deleted === 0) {
        throw new Error("Product not found.");
      }

      return { message: "Product deleted successfully." };
    } catch (error) {
      throw error;
    }
  };
}

export default ProductService;