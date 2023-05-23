import type {ITaskUseCaseGetAll} from "@/@core/help/axios/task/useCases/taskUseCaseGetAll/ITaskUseCaseGetAll";
import {TaskUseCaseGetAll} from "@/@core/help/axios/task/useCases/taskUseCaseGetAll/TaskUseCaseGetAll";
import {TaskRepository} from "@/@core/help/axios/task/repository/TaskRepository";


export const getAll = async (params: ITaskUseCaseGetAll.Params) => {
  const taskRepository = new TaskRepository()
  const taskUseCaseGetAll = new TaskUseCaseGetAll(taskRepository)

  return await taskUseCaseGetAll.getAll(params)
}