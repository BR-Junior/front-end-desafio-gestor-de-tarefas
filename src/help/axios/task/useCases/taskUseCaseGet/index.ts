import type {ITaskUseCaseGet} from "@/help/axios/task/useCases/taskUseCaseGet/ITaskUseCaseGet";
import {TaskRepository} from "@/help/axios/task/repository/TaskRepository";
import {TaskUseCaseGet} from "@/help/axios/task/useCases/taskUseCaseGet/TaskUseCaseGet";


export const get = async (params: ITaskUseCaseGet.Params): Promise<ITaskUseCaseGet.Result> => {
  const taskRepository = new TaskRepository()
  const taskUseCaseGet = new TaskUseCaseGet(taskRepository)

  return await taskUseCaseGet.get(params)
}