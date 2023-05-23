import type {IUserUseCaseSignUp} from "@/@core/help/axios/signIn-signUp/useCases/userUseCaseSignUp/IUserUseCaseSignUp";
import {UserRepository} from "@/@core/help/axios/signIn-signUp/repository/UserRepository";
import {UserUseCaseSignUp} from "@/@core/help/axios/signIn-signUp/useCases/userUseCaseSignUp/UserUseCaseSignUp";


export const signUp = async (params: IUserUseCaseSignUp.Params) => {
  const userRepository = new UserRepository()
  const userUseCaseSignUp = new UserUseCaseSignUp(userRepository)

  return await userUseCaseSignUp.signUp(params)
}