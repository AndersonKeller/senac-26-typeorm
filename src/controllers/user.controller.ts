import { Request, Response } from "express"
import { getUsersService } from "../services/getUsers.service"
import { createUserService } from "../services/createUser.service"
import { updateUserService } from "../services/updateUser.service"

export const userController = {
    async getUsers(req: Request, res: Response) {
        const users = await getUsersService()

        res.status(200).json(users)
    },
    async createUser(req: Request, res: Response) {
        const userData = req.body
        const user = await createUserService(userData)

        res.status(200).json(user)

    },
    async updateUser(req: Request, res: Response) {
        const userId: string = req.params.id as string
        const userData= req.body
        const user = await updateUserService(userId,userData)

        res.status(200).json(user)
    }
}
