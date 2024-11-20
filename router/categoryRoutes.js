import { Router } from "express";
import categoryController from "../controllers/categoryController.js";

const categoryRoutes = Router();

const controller = new categoryController();

categoryRoutes.get("/", controller.getAllCategories); 
categoryRoutes.get("/:id", controller.getCategoryById); 
categoryRoutes.post("/", controller.createCategory); 
categoryRoutes.put("/:id", controller.updateCategory); 
categoryRoutes.delete("/:id", controller.deleteCategory); 

export default categoryRoutes;