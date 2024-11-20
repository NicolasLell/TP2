import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";


class Category extends Model {}

Category.init(
    {
        category_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize: connection,
        modelName: "Category",
    }
);

module.exports = Category;