import type {IRepositoryLogin} from "@/axios/repositories/IRepositoryLogin";
import type {ILoginRequestDTO, ILoginResponseDTO} from "@/axios/DTO/ILoginDTO";
import axios from "axios";
import type { AxiosInstance } from "axios";


export const http:AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333/',
})

export class RepositoryLogin implements IRepositoryLogin{
  private repository = http
  async postLogin(url: string, dataLogin: ILoginRequestDTO): Promise<ILoginResponseDTO> {

    const response = await this.repository.post(url, dataLogin).catch((error) => {
      if (error.response) return error.response
    })

    const {id, token } = response.data

    if (!id && !token) return response.data.error.message

    const result = {id: id,token: token}

    return result as ILoginResponseDTO

  }
}