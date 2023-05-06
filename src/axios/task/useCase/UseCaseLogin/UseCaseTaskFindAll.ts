import type {IRepositoryTask} from "@/axios/task/repositories/IRepositoryTask";
import type {ITaskRequestDTO, ITaskResponseDTO} from "@/axios/task/DTO/ITaskDTO";

export class UseCaseTaskFindAll {
  constructor(private repo: IRepositoryTask) {}

  async execute(url:string, dataTask: ITaskRequestDTO): Promise<any> {
    const result = await this.repo.findAll(url, dataTask)

    return result
  }
}
