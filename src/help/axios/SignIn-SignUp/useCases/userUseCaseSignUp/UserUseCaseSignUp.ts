import type {IUserUseCaseSignUp} from "@/help/axios/SignIn-SignUp/useCases/userUseCaseSignUp/IUserUseCaseSignUp";


export class UserUseCaseSignUp implements IUserUseCaseSignUp{
  constructor(private repo: IUserUseCaseSignUp) {}

  async signUp(params: IUserUseCaseSignUp.Params): Promise<IUserUseCaseSignUp.Result> {
    return this.repo.signUp(params)
  }
}