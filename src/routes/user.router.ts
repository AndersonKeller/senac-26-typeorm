import {Router } from "express"
import { userController } from "../controllers/user.controller"
export const userRoutes:Router = Router()

userRoutes.get("",userController.getUsers)
userRoutes.post("",userController.createUser)