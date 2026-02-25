import express from "express";
import registerController from "../controllers/register.controller.js";
import authMiddleware from "../middlewares/auth.middlewares.js";

const registerRouter = express.Router();

registerRouter.post("/registrations", authMiddleware, registerController.createRegister);

export default registerRouter;