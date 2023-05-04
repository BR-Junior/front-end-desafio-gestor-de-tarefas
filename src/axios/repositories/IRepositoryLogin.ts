import type {ILoginRequestDTO, ILoginResponseDTO} from "@/axios/DTO/ILoginDTO";

export interface IRepositoryLogin {
  postLogin(url:string, dataLogin:ILoginRequestDTO): Promise<ILoginResponseDTO>

}