import { Product } from "../models/models.js";
import { Category } from "../models/models.js";  // Importa el modelo de Categorías
import { faker } from "@faker-js/faker";

async function productSeed() {
  try {
    // Obtén todas las categorías de la base de datos
    const categories = await Category.findAll();

    // Verifica si hay categorías disponibles
    if (categories.length === 0) {
      console.error("No hay categorías disponibles. Primero debes insertar categorías.");
      return;
    }

    const products = [];

    for (let i = 0; i < 10; i++) {
      // Escoge una categoría aleatoria de las existentes
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];

      products.push({
        product_name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
        categoryID: randomCategory.category_id,  // Asocia con una categoría existente
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