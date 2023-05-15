import axios from "axios";
import type {AxiosInstance} from "axios";
import type {IUserUseCaseSignIn} from "@/help/axios/SignIn-SignUp/useCases/userUseCaseSignIn/IUserUseCaseSignIn";
import type {IUserUseCaseSignUp} from "@/help/axios/SignIn-SignUp/useCases/userUseCaseSignUp/IUserUseCaseSignUp";

export const http:AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333/',
})
export class UserRepository implements
  IUserUseCaseSignIn,
  IUserUseCaseSignUp{

  private repoHttp = http

  async signIn(params: IUserUseCaseSignIn.Params): Promise<IUserUseCaseSignIn.Return> {
    return await this.repoHttp.post('entrar', params)
      .then(response => response.data)
      .catch(error => error.response.data.error.message)
  }

  async signUp(params: IUserUseCaseSignUp.Params): Promise<IUserUseCaseSignUp.Result> {
    return await this.repoHttp.post('cadastrar', params)
      .then(response => response.data)
      .catch(error => error.response.data.errors.body)
  }
}