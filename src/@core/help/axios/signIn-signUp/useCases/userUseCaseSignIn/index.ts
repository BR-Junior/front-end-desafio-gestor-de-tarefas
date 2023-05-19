import {UserRepository} from '../../repository/UserRepository'
import {UserUseCaseSignIn} from './UserUseCaseSignIn'
import type {IUserUseCaseSignIn} from "@/@core/help/axios/signIn-signUp/useCases/userUseCaseSignIn/IUserUseCaseSignIn";
import {schema} from "@/@core/help/axios/signIn-signUp/useCases/userUseCaseSignIn/validationSchema";
import {validation} from "@/@core/help/shared/validationBase/validation";

export const signIn = async (params: IUserUseCaseSignIn.Params) => {
  const userRepository = new UserRepository()
  const userUseCaseSignIn = new UserUseCaseSignIn(userRepository)

  const isValid = await validation(params, schema)
  if (isValid.errors) return  isValid

  return await userUseCaseSignIn.signIn(params)
}