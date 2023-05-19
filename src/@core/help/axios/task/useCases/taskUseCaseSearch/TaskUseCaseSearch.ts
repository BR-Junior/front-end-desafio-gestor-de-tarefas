import type {ITaskUseCaseSearch} from "@/@core/help/axios/task/useCases/taskUseCaseSearch/ITaskUseCaseSearch";


export class TaskUseCaseSearch implements ITaskUseCaseSearch{
  constructor(private repoUseCase: ITaskUseCaseSearch) {}

  async search(params: ITaskUseCaseSearch.Params): Promise<ITaskUseCaseSearch.Result[] | Error> {
    return await this.repoUseCase.search(params);
  }
}