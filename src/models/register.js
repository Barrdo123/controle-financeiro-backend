import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Registration = db.define("registration", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    category: {type: DataTypes.STRING, allowNull: false},
    type: DataTypes.ENUM("revenue","expense"),
    description: DataTypes.STRING,
    value: DataTypes.DECIMAL(10, 2),
    userId:{type: DataTypes.INTEGER}
});

export default Registration;