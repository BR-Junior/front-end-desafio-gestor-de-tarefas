export interface ITaskUseCaseSearch {
  search(params: ITaskUseCaseSearch.Params): Promise<ITaskUseCaseSearch.Result[] | Error>
}
export namespace ITaskUseCaseSearch {
  export type Params = {
    task: any
    idUser: string
    token: string
  }
  export type Result = {
    id: string
    task: string
    priority: string
    creationDate: string
    status: string
  }
}