import { AppError } from './../../error';
import { AppDataSource } from "../connection"
import { User } from "../entities"

export const updateUserService = async (userId: string, userData: any) => {
    const userRepository = AppDataSource.getRepository(User)

    const findUser: User | null = await userRepository.findOne(
        {
            where: {
                id: userId
            }
        }
    )
    if (!findUser) {
        throw new AppError("Usuário não encontrado", 404)
    }
    const newUser = {
        ...findUser, ...userData
    }
    const updateUser = userRepository.create(newUser)
    await userRepository.save(updateUser)

    return updateUser
}