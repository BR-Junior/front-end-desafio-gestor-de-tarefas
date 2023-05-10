import type {IRepositoryTask} from "@/axios/task/repositories/IRepositoryTask";
import type {ITaskCreateDTO} from "@/axios/task/DTO/ITaskDTO";

export class UseCaseTaskCreate {
  constructor(private repo: IRepositoryTask) {}

  async execute(url: string, taskInputCreate:ITaskCreateDTO): Promise<any> {
    const result = await this.repo.create(url, taskInputCreate)

    return result
  }
}
