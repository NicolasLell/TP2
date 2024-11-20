import Category from "../models/category.js";

class categoryService {
  
  getAllCategories = async () => {
    try {
      const categories = await Category.findAll({
        attributes: ["id", "name"], // Asegúrate de que "id" exista en el modelo
      });
      return categories;
    } catch (error) {
      throw error;
    }
  };


  getCategoryById = async (id) => {
    try {
      const category = await Category.findOne({
        where: { id },
        attributes: ["id", "name"],
      });

      if (!category) {
        throw new Error("Category not found.");
      }

      return category;
    } catch (error) {
      throw error;
    }
  };

  createCategory = async (category) => {
    try {
      const newCategory = await Category.create(category);
      return newCategory;
    } catch (error) {
      throw error;
    }
  };

  updateCategory = async (data) => {
    try {
      const { id, name } = data;
      const updatedCategory = await Category.update(
        { name },
        {
          where: { id },
        }
      );

      if (updatedCategory[0] === 0) {
        throw new Error("Category not found or no changes made.");
      }

      return { message: "Category updated successfully." };
    } catch (error) {
      throw error;
    }
  };

  deleteCategory = async (id) => {
    try {
      const deleted = await Category.destroy({
        where: { id },
      });

      if (deleted === 0) {
        throw new Error("Category not found.");
      }

      return { message: "Category deleted successfully." };
    } catch (error) {
      throw error;
    }
  };
}

export default categoryService;