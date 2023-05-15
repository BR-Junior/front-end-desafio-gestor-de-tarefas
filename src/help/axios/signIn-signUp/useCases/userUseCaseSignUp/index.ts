import type {IUserUseCaseSignUp} from "@/help/axios/signIn-signUp/useCases/userUseCaseSignUp/IUserUseCaseSignUp";
import {UserRepository} from "@/help/axios/signIn-signUp/repository/UserRepository";
import {UserUseCaseSignUp} from "@/help/axios/signIn-signUp/useCases/userUseCaseSignUp/UserUseCaseSignUp";


export const signUp = async (params: IUserUseCaseSignUp.Params) => {
  const userRepository = new UserRepository()
  const userUseCaseSignUp = new UserUseCaseSignUp(userRepository)

  return await userUseCaseSignUp.signUp(params)
}