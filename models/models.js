import product from "./product";
import category from "./category";

product.belongsTo(category)
category.hasMany(product)

export {product, category}