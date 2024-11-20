import { Router } from "express";
import CategoryController from "../controllers/CategoryController.js";

const categoryRouter = Router();

const controller = new CategoryController();

categoryRouter.get("/", controller.getAllCategories); 
categoryRouter.get("/:id", controller.getCategoryById); 
categoryRouter.post("/", controller.createCategory); 
categoryRouter.put("/:id", controller.updateCategory); 
categoryRouter.delete("/:id", controller.deleteCategory); 

export default categoryRouter;