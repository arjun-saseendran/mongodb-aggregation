import { Router } from "express";
import { getUsers, signup } from "../controllers/userController.js";

export const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.get('/view', getUsers)
