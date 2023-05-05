import type {ILoginRequestDTO, ILoginResponseDTO} from "@/axios/login/DTO/ILoginDTO";

export interface IRepositoryLogin {
  postLogin(url:string, dataLogin:ILoginRequestDTO): Promise<ILoginResponseDTO>


}