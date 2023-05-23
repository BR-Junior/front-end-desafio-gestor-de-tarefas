import type {ITaskUseCaseGet} from "@/@core/help/axios/task/useCases/taskUseCaseGet/ITaskUseCaseGet";
import {TaskRepository} from "@/@core/help/axios/task/repository/TaskRepository";
import {TaskUseCaseGet} from "@/@core/help/axios/task/useCases/taskUseCaseGet/TaskUseCaseGet";


export const get = async (params: ITaskUseCaseGet.Params): Promise<ITaskUseCaseGet.Result> => {
  const taskRepository = new TaskRepository()
  const taskUseCaseGet = new TaskUseCaseGet(taskRepository)

  return await taskUseCaseGet.get(params)
}