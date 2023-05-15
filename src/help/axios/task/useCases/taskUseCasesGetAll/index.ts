import type {ITaskUseCasesGetAll} from "@/help/axios/task/useCases/taskUseCasesGetAll/ITaskUseCasesGetAll";
import {TaskUseCasesGetAll} from "@/help/axios/task/useCases/taskUseCasesGetAll/TaskUseCasesGetAll";
import {TaskRepository} from "@/help/axios/task/repository/TaskRepository";


export const getAll = async (params: ITaskUseCasesGetAll.Params) => {
  const taskRepository = new TaskRepository()
  const taskUseCasesGetAll = new TaskUseCasesGetAll(taskRepository)

  return await taskUseCasesGetAll.getAll(params)
}