import type {ITaskUseCasesGetAll} from "@/help/axios/task/useCases/taskUseCasesGetAll/ITaskUseCasesGetAll";


export class TaskUseCasesGetAll implements ITaskUseCasesGetAll{
  constructor(private repo: ITaskUseCasesGetAll) {}
  async getAll(params:ITaskUseCasesGetAll.Params): Promise<ITaskUseCasesGetAll.Result> {
    return await this.repo.getAll(params)
  }
}