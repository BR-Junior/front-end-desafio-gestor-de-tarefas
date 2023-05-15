export interface ITaskUseCasePost {
  post(params: ITaskUseCasePost.Params): Promise<ITaskUseCasePost.Result>
}
export namespace ITaskUseCasePost {
  export type Params = {
    idUser: string
    token: string
    task: string
    priority: string
    status: string
  }
  export type Result ={
    idUser: string
    id: string
    task: string
    priority: string
    status: string
    creationDate: string

  }
}