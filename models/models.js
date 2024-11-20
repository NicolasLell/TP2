import Product from "./product.js";
import Category from "./category.js";

Product.belongsTo(Product)
Category.hasMany(Category)

export {Product, Category}