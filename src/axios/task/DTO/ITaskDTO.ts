export enum IPriority {
  low = 'low',
  normal = 'normal',
  high = 'high'
}
export enum IStatus {
  open = 'open',
  doing = 'doing',
  finished = 'finished'
}
export interface ITaskRequestDTO {
  idUser:string
  // priority?:IPriority
  status?:string
  // creationDate?:string
  token: string
  sort?: {}
}
export interface ITaskResponseDTO {
  id: string
  task: string
  priority: string
  creationDate: string
  status: string
}
export interface ITaskCreateDTO {
  token: string,
  task: string
  priority: string
  status: string
  idUser: string
}