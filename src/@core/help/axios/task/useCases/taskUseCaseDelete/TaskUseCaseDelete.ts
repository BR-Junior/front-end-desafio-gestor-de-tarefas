import type {ITaskUseCaseDelete} from "@/@core/help/axios/task/useCases/taskUseCaseDelete/ITaskUseCaseDelete";


export class TaskUseCaseDelete implements ITaskUseCaseDelete{
  constructor(private repo: ITaskUseCaseDelete) {}

  async delete(params: ITaskUseCaseDelete.Params): Promise<ITaskUseCaseDelete.Result> {
    return await this.repo.delete(params)
  }
}