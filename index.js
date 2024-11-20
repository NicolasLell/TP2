import express from "express";
import { notFound } from "./middlewares/notFound.js";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";
import productSeed from "./seed/productSeed.js";

const app = express();
const port = SERVER_PORT || 3603

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(notFound);

await connection.sync();

app.listen(port,()=>{
    console.log('Server en el puerto 3')
})