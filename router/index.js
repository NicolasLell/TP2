import { Router } from "express";
import productsRouter from "./productsRouter.js";
import categoryRouter from "./categoryRouter.js";

const routes = Router();

routes.use("/products", productsRouter); 
routes.use("/categories", categoryRouter); 

export default routes;