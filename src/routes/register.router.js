import express from "express";
import registerController from "../controllers/register.controller.js";
import authMiddleware from "../middlewares/auth.middlewares.js";

const registerRouter = express.Router();

registerRouter.post("/registrations/create", authMiddleware, registerController.createRegister);
registerRouter.put("/registrations/update/:id", authMiddleware, registerController.updateRegister);
registerRouter.delete("/registrations/delete/:id", authMiddleware, registerController.deleteRegister);

export default registerRouter;