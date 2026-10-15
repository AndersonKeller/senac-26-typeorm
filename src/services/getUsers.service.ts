import { AppDataSource } from "../connection"
import { User } from "../entities"

export const getUsersService = async () => {

    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    return users
}