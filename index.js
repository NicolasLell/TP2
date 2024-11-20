import express from "express";
import { notFound } from "./middlewares/notFound.js";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";
import productSeed from "./seed/productSeed.js";
import categorySeed from "./seed/categorySeed.js";
import routes from "./router/index.js";

const app = express();
const port = SERVER_PORT || 3000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.use(routes);  

// Seed y conexión a la base de datos
const startServer = async () => {
  try {
    await connection.sync();  
    await productSeed();       
    await categorySeed();      
    
    
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error during server startup:", error);
  }
};

startServer();


app.use(notFound);