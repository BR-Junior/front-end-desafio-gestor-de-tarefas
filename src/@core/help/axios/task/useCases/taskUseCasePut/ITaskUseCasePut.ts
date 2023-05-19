export interface ITaskUseCasePut {
  put(params: ITaskUseCasePut.Params): Promise<ITaskUseCasePut.Result>
}
export namespace ITaskUseCasePut {
  export type Params = {
    idUser: string
    token:string
    id: string
    task: string
    priority: string
    status: string
  }
  export type Result = {
    idUser: string
    id: string
    task: string
    priority: string
    status: string
    creationDate: string
  }
}