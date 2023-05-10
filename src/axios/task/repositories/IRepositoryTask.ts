import type {ITaskCreateDTO, ITaskRequestDTO, ITaskResponseDTO} from "@/axios/task/DTO/ITaskDTO";

export interface IRepositoryTask {
  findAll(url:string, dataTask: ITaskRequestDTO): Promise<any>

  create(url: string,  taskInputCreate:ITaskCreateDTO): Promise<any>
}

