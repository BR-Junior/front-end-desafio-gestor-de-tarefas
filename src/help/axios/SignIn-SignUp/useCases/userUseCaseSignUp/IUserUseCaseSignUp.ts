export interface IUserUseCaseSignUp {
  signUp(params: IUserUseCaseSignUp.Params): Promise<IUserUseCaseSignUp.Result>
}

export namespace IUserUseCaseSignUp {
  export type Params = {
    name: string
    email: string
    password: string
  }
  export type Result = {
    id: string
    name: string
    email: string
    password: string
  }
}