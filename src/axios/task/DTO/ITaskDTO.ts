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
  // status?:IStatus
  // creationDate?:string
  token: string
}
export interface ITaskResponseDTO {
  id: string
  task: string
  priority: string
  creationDate: string
  status: string
}