export interface ITaskUseCaseGet {
  get(params: ITaskUseCaseGet.Params): Promise<ITaskUseCaseGet.Result>
}
export namespace ITaskUseCaseGet {
  export type Params = {
    id: string
    token:string
  }
  export type Result = {
    id: string
    task: string
    priority: string
    creationDate: string
    status: string
  }
}