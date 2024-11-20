import { Category } from "../models/models.js";
import faker from "@faker-js/faker"; 

async function categorySeed() {
  try {
    // Generar categorías falsas usando faker
    const categories = [];
    for (let i = 0; i < 5; i++) { 
      categories.push({
        category_name: faker.commerce.department()
      });
    }

    // Insertar las categorías en la base de datos
    await Category.bulkCreate(categories, {
      individualHooks: true 
    });

    console.log('Categorías insertadas correctamente');
  } catch (error) {
    console.error("Error al insertar categorías:", error);
  }
}

export default categorySeed;