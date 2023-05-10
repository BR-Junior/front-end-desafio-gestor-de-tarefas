import type {ITaskUseCaseDelete} from "@/axios/task/useCase/TaskUseCaseDelete/ITaskUseCaseDelete";

export class TaskUseCaseDelete {
  constructor(private taskRepo: ITaskUseCaseDelete) {}

  async execute(params: ITaskUseCaseDelete.Params) {
    const response = await this.taskRepo.delete(params)

    return response
  }
}