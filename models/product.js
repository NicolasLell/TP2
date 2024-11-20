import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Product extends Model {}

Product.init(
    {
        product_id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        product_name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        price:{
        type: DataTypes.FLOAT(10,2),
        allowNull: false
        },
        categoryID:{
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
        }
    },
    {
        sequelize: connection,
        modelName: "Product",
      }
)
export default Product;