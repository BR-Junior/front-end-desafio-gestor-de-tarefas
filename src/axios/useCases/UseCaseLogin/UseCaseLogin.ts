import type {ILoginRequestDTO, ILoginResponseDTO} from "@/axios/DTO/ILoginDTO";
import type {IRepositoryLogin} from "@/axios/repositories/IRepositoryLogin";

export class UseCaseLogin {
  constructor(private repo: IRepositoryLogin) {}

  async execute(url:string, dataLogin:ILoginRequestDTO): Promise<ILoginResponseDTO> {
    const result = await this.repo.postLogin(url, dataLogin)

    return result as ILoginResponseDTO
  }
}
