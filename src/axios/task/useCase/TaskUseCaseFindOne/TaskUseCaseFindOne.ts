import type {ITaskUseCaseFindOne} from "@/axios/task/useCase/TaskUseCaseFindOne/ITaskUseCaseFindOne";

export class TaskUseCaseFindOne {
  constructor(private taskRepo: ITaskUseCaseFindOne) {}

  async execute(params: ITaskUseCaseFindOne.Params) {
    const response = await this.taskRepo.findOne(params)

    return response
  }
}