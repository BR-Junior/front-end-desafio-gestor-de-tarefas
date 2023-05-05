import type {IRepositorySignUp} from "@/axios/signUp/repositories/IRepositorySignUp";
import type {ISignUpRequestDTO, ISignUpResponseDTO} from "@/axios/signUp/DTO/IsignUpDTO";


export class SignUpUseCase {
  constructor(private repo: IRepositorySignUp) {}

  async execute(url:string, dataLogin:ISignUpRequestDTO): Promise<ISignUpResponseDTO> {
    const result = await this.repo.postSignUp(url, dataLogin)

    return result as ISignUpResponseDTO
  }
}