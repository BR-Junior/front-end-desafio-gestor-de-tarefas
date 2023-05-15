export interface ITaskUseCaseDelete {
  delete(params: ITaskUseCaseDelete.Params): Promise<ITaskUseCaseDelete.Result>
}
export namespace ITaskUseCaseDelete {
  export type Params = {
    id: string
    token:string
  }
  export type Result = boolean
}