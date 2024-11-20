import { Router } from "express";
import CategoryController from "../controllers/CategoryController.js";

const categoryRouter = Router();

const controller = new CategoryController();

categoryRoutes.get("/", controller.getAllCategories); 
categoryRoutes.get("/:id", controller.getCategoryById); 
categoryRoutes.post("/", controller.createCategory); 
categoryRoutes.put("/:id", controller.updateCategory); 
categoryRoutes.delete("/:id", controller.deleteCategory); 

export default categoryRouter;