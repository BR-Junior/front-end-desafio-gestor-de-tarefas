import axios from "axios";
import type {AxiosInstance} from "axios";
import type {IUserUseCaseSignIn} from "@/help/axios/SignIn-SignUp/useCases/userUseCaseSignIn/IUserUseCaseSignIn";

export const http:AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333/',
})
export class UserRepository implements IUserUseCaseSignIn{

  private repoHttp = http

  async signIn(params: IUserUseCaseSignIn.Params): Promise<IUserUseCaseSignIn.Return> {
    return await this.repoHttp.post('entrar', params)
      .then(response => response.data)
      .catch(error => error.response.data.error.message)
  }
}