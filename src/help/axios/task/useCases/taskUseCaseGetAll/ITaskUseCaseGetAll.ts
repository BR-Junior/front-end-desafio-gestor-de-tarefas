export interface ITaskUseCaseGetAll {
  getAll(params: ITaskUseCaseGetAll.Params): Promise<ITaskUseCaseGetAll.Result>
}
export namespace ITaskUseCaseGetAll {
  export type Params = {
    idUser: string
    token: string
    sort?: {}
  }
  export type Result = {
    id: string
    task: string
    priority: string
    creationDate: string
    status: string
  }
}