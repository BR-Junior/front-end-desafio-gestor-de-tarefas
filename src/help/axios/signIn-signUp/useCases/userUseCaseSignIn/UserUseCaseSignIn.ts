import type {IUserUseCaseSignIn} from "@/help/axios/signIn-signUp/useCases/userUseCaseSignIn/IUserUseCaseSignIn";



export class UserUseCaseSignIn implements IUserUseCaseSignIn{
  constructor(private repo: IUserUseCaseSignIn) {}

  async signIn(params: IUserUseCaseSignIn.Params): Promise<IUserUseCaseSignIn.Return> {
    return this.repo.signIn(params)
  }
}