import type {ITaskUseCasePut} from "@/@core/help/axios/task/useCases/taskUseCasePut/ITaskUseCasePut";


export class TaskUseCasePut implements ITaskUseCasePut{
  constructor(private repo: ITaskUseCasePut) {}

  async put(params: ITaskUseCasePut.Params): Promise<ITaskUseCasePut.Result> {
    return this.repo.put(params)
  }
}