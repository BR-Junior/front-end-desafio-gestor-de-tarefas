import type {ISignUpRequestDTO, ISignUpResponseDTO} from "@/axios/signUp/DTO/IsignUpDTO";

export interface IRepositorySignUp {
  postSignUp(url: string, dataSignUp:ISignUpRequestDTO): Promise<ISignUpResponseDTO>
}