import { Router } from "express";
import { getActiveUsers, getActiveUsersCount, getInactiveUser, getInactiveUsersCount, getUsers, signup } from "../controllers/userController.js";

export const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.get('/view', getUsers)
userRouter.get('/active-users', getActiveUsers)
userRouter.get('/inactive-users', getInactiveUser)
userRouter.get('/active-users-count', getActiveUsersCount);
userRouter.get('/inactive-users-count',getInactiveUsersCount)
