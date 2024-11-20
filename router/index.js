import { Router } from "express";
import productsRoutes from "./productsRoutes.js";
import categoryRoutes from "./categoryRoutes.js";

const routes = Router();

routes.use("/products", productsRoutes); 
routes.use("/categories", categoryRoutes); 

export default routes;