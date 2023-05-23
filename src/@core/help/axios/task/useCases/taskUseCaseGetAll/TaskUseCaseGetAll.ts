import type {ITaskUseCaseGetAll} from "@/@core/help/axios/task/useCases/taskUseCaseGetAll/ITaskUseCaseGetAll";


export class TaskUseCaseGetAll implements ITaskUseCaseGetAll{
  constructor(private repo: ITaskUseCaseGetAll) {}
  async getAll(params:ITaskUseCaseGetAll.Params): Promise<ITaskUseCaseGetAll.Result> {
    return await this.repo.getAll(params)
  }
}