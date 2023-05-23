export interface IUserUseCaseSignIn {
  signIn(params:IUserUseCaseSignIn.Params): Promise<IUserUseCaseSignIn.Return>
}

export namespace IUserUseCaseSignIn {
  export type Params = {
   email: string
    password: string
  }
  export type Return = {
    token: string
    id: string
  }
}