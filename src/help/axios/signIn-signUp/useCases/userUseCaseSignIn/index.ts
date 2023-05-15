import {UserRepository} from '../../repository/UserRepository'
import {UserUseCaseSignIn} from './UserUseCaseSignIn'
import type {IUserUseCaseSignIn} from "@/help/axios/signIn-signUp/useCases/userUseCaseSignIn/IUserUseCaseSignIn";
import {schema} from "@/help/axios/signIn-signUp/useCases/userUseCaseSignIn/validationSchema";
import {validation} from "@/help/shared/validationBase/validation";

export const signIn = async (params: IUserUseCaseSignIn.Params) => {
  const userRepository = new UserRepository()
  const userUseCaseSignIn = new UserUseCaseSignIn(userRepository)

  const isValid = await validation(params, schema)
  if (isValid.errors) return  isValid

  return await userUseCaseSignIn.signIn(params)
}