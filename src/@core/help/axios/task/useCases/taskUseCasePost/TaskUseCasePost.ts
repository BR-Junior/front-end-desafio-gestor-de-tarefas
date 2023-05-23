import type {ITaskUseCasePost} from "@/@core/help/axios/task/useCases/taskUseCasePost/ITaskUseCasePost";


export class TaskUseCasePost implements ITaskUseCasePost{
  constructor(private repo: ITaskUseCasePost) {}

  async post(params: ITaskUseCasePost.Params): Promise<ITaskUseCasePost.Result> {
    return await this.repo.post(params)
  }
}