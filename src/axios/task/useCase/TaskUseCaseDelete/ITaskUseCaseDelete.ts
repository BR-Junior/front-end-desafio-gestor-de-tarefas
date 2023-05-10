export interface ITaskUseCaseDelete {
  delete: (params: ITaskUseCaseDelete.Params) => Promise<void>
}

export namespace ITaskUseCaseDelete {
  export type Params = {
    url: string
    token:string
    id: string
  }
}