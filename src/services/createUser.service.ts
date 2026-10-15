import { AppDataSource } from "../connection"
import { User } from "../entities"

export const createUserService = async (userData: any) => {
    const userRepository = AppDataSource.getRepository(User)


    const createUser = userRepository.create(userData)
    await userRepository.save(createUser)

    return createUser
}