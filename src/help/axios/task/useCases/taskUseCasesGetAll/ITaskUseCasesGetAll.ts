export interface ITaskUseCasesGetAll {
  getAll(params: ITaskUseCasesGetAll.Params): Promise<ITaskUseCasesGetAll.Result>
}
export namespace ITaskUseCasesGetAll {
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