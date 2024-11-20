
import {DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_DIALECT, DB_PORT } from '../config/config.js';
import { Sequelize } from 'sequelize';

const connection = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  port: DB_PORT
});

try {
    await connection.authenticate();
    console.log("Se conecto correctamente");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
  
  export default connection ;