import { Sequelize } from "sequelize";
import "dotenv/config";

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: "postgres",
        logging: false,
    }
);

//teste de conexão

export const connectDB = async () => {
  try {
    await db.authenticate();
    console.log("Banco conectado com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar no banco:", error);
  }
};

export default db;