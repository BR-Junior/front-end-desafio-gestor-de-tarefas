import type {ITaskUseCaseGet} from "@/help/axios/task/useCases/taskUseCaseGet/ITaskUseCaseGet";


export class TaskUseCaseGet implements ITaskUseCaseGet{
  constructor(private repo: ITaskUseCaseGet) {}

  async get(params: ITaskUseCaseGet.Params): Promise<ITaskUseCaseGet.Result> {
    return await this.repo.get(params)
  }

}