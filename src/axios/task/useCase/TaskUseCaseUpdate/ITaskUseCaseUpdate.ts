export interface ITaskUseCaseUpdate {
  update: (params: ITaskUseCaseUpdate.Params) => Promise<any>
}

export namespace ITaskUseCaseUpdate {
  export type Params = {
    url: string
    token:string
    id: string
    task: string
    priority: string
    status: string
    idUser: string
  }
}