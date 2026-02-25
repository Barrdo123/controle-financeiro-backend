import { DataTypes } from "sequelize";
import db from "../config/database.js";

const User = db.define("user",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: DataTypes.STRING,
    email: {type: DataTypes.STRING, unique: true},
    password: DataTypes.STRING
});

export default User;