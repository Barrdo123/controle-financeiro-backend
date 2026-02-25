import "dotenv/config";
import express from "express";
import db from "./config/database.js";
import registerRouter from "./routes/register.router.js";
import userRouter from "./routes/user.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(registerRouter);

db.sync().then(() => console.log("Banco de dados Sincronizado"));

app.listen(3000, () => console.log("Servidor rodando. Porta: 3000"));
