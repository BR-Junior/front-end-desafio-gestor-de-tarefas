import type {ITaskRequestDTO, ITaskResponseDTO} from "@/axios/task/DTO/ITaskDTO";

export interface IRepositoryTask {
  findAll(url:string, dataTask: ITaskRequestDTO): Promise<any>


}