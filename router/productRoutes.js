import { Router } from "express";
import productController from "../controllers/productController.js";

const productsRoutes = Router();

const controller = new productController();

productsRoutes.get("/", controller.getAllProducts); 
productsRoutes.get("/:id", controller.getProductById); 
productsRoutes.post("/", controller.createProduct); 
productsRoutes.put("/:id", controller.updateProduct); 
productsRoutes.delete("/:id", controller.deleteProduct); 

export default productsRoutes;