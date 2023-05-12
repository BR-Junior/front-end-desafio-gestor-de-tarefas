import {UserRepository} from '../../Repository/UserRepository'
import {UserUseCaseSignIn} from './UserUseCaseSignIn'
import type {IUserUseCaseSignIn} from "@/help/axios/SignIn-SignUp/useCases/userUseCaseSignIn/IUserUseCaseSignIn";


export const signIn = async (params: IUserUseCaseSignIn.Params) => {
  const userRepository = new UserRepository()
  const userUseCaseSignIn = new UserUseCaseSignIn(userRepository)

  return await userUseCaseSignIn.signIn(params)
}