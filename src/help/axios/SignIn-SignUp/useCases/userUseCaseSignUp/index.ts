import type {IUserUseCaseSignUp} from "@/help/axios/SignIn-SignUp/useCases/userUseCaseSignUp/IUserUseCaseSignUp";
import {UserRepository} from "@/help/axios/SignIn-SignUp/Repository/UserRepository";
import {UserUseCaseSignUp} from "@/help/axios/SignIn-SignUp/useCases/userUseCaseSignUp/UserUseCaseSignUp";


export const signUp = async (params: IUserUseCaseSignUp.Params) => {
  const userRepository = new UserRepository()
  const userUseCaseSignUp = new UserUseCaseSignUp(userRepository)

  return await userUseCaseSignUp.signUp(params)
}