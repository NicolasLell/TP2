import { Product } from "../models/models.js";
import { faker } from "@faker-js/faker";

async function productSeed() {
  try {
    const products = [];
    
    for (let i = 0; i < 10; i++) {
      products.push({
        product_name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),  
        categoryID: faker.datatype.uuid(),  
      });
    }

    // Insertar los productos generados en la base de datos
    await Product.bulkCreate(products, {
      individualHooks: true
    });

    console.log('Productos insertados correctamente');
  } catch (error) {
    console.error("Error al insertar productos:", error);
  }
}

export default productSeed;