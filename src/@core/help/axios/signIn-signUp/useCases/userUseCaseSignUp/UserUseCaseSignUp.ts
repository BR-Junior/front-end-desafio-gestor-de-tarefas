import type {IUserUseCaseSignUp} from "@/@core/help/axios/signIn-signUp/useCases/userUseCaseSignUp/IUserUseCaseSignUp";


export class UserUseCaseSignUp implements IUserUseCaseSignUp{
  constructor(private repo: IUserUseCaseSignUp) {}

  async signUp(params: IUserUseCaseSignUp.Params): Promise<IUserUseCaseSignUp.Result> {
    return this.repo.signUp(params)
  }
}