import CategoryService from "../services/CategoryService.js";

class categoryController {
  service = new categoryService();


  getAllCategories = async (req, res) => {
    try {
      const data = await this.service.getAllCategories();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };


  getCategoryById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.service.getCategoryById(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };


  createCategory = async (req, res) => {
    try {
      const { name } = req.body;
      const data = await this.service.createCategory({ name });
      res.status(201).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

 
  updateCategory = async (req, res) => {
    try {
      const { name } = req.body;
      const { id } = req.params;
      const data = await this.service.updateCategory({ id, name });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };


  deleteCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.service.deleteCategory(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default categoryController;