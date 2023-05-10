export interface ITaskUseCaseFindOne {
  findOne: (params: ITaskUseCaseFindOne.Params) => Promise<any>
}

export namespace ITaskUseCaseFindOne {
  export type Params = {
    url: string
    token:string
    id: string
  }
}