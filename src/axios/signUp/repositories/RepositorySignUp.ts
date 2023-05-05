import type {IRepositorySignUp} from  './IRepositorySignUp'
import type {ISignUpRequestDTO, ISignUpResponseDTO} from "@/axios/signUp/DTO/IsignUpDTO";
import axios from "axios";

import type { AxiosInstance } from "axios";export const http:AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333/',
})
export class RepositorySignUp implements IRepositorySignUp{

  private repository = http
  
  async postSignUp(url: string, dataSignUp: ISignUpRequestDTO): Promise<ISignUpResponseDTO> {

    const response = await this.repository.post(url, dataSignUp).catch((error) => {
      if (error.response) return error.response
    })

    const {id, name, email, password  } = response.data

    if (!id && !email) {

      return response.data.errors.body

    }

    const result = {id: id, name: name, email: email, password: password}

    return result as ISignUpResponseDTO

  }
}
