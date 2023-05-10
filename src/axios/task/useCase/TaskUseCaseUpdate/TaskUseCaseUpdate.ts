import type {ITaskUseCaseUpdate} from "@/axios/task/useCase/TaskUseCaseUpdate/ITaskUseCaseUpdate";

export class TaskUseCaseUpdate {
  constructor(private taskRepo: ITaskUseCaseUpdate) {}

  async execute(params: ITaskUseCaseUpdate.Params) {
    const response = await this.taskRepo.update(params)

    return response
  }
}