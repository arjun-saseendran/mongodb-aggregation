import { Router } from "express";
import { getActiveUsers, getActiveUsersCount, getInactiveUser, getInactiveUsersCount, getUserAgeAvgByGender, getUsers, signup, topThreeFavouritFruit } from "../controllers/userController.js";

export const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.get('/view', getUsers)
userRouter.get('/active-users', getActiveUsers)
userRouter.get('/inactive-users', getInactiveUser)
userRouter.get('/active-users-count', getActiveUsersCount);
userRouter.get('/inactive-users-count',getInactiveUsersCount)
userRouter.get('/get-avg-age-by-gender',getUserAgeAvgByGender)
userRouter.get('/get-top-three-favorite-fruit', topThreeFavouritFruit)
