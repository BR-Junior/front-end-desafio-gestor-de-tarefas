import type {ITaskUseCaseGetAll} from "@/help/axios/task/useCases/taskUseCaseGetAll/ITaskUseCaseGetAll";
import {TaskUseCaseGetAll} from "@/help/axios/task/useCases/taskUseCaseGetAll/TaskUseCaseGetAll";
import {TaskRepository} from "@/help/axios/task/repository/TaskRepository";


export const getAll = async (params: ITaskUseCaseGetAll.Params) => {
  const taskRepository = new TaskRepository()
  const taskUseCaseGetAll = new TaskUseCaseGetAll(taskRepository)

  return await taskUseCaseGetAll.getAll(params)
}