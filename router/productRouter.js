import { Router } from "express";
import ProductController from "../controllers/ProductController.js";

const productsRouter = Router();

const controller = new ProductController();

productsRouter.get("/", controller.getAllProducts); 
productsRouter.get("/:id", controller.getProductById); 
productsRouter.post("/", controller.createProduct); 
productsRouter.put("/:id", controller.updateProduct); 
productsRouter.delete("/:id", controller.deleteProduct); 

export default productsRouter;