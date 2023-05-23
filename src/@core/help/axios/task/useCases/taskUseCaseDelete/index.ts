import type {ITaskUseCaseDelete} from "@/@core/help/axios/task/useCases/taskUseCaseDelete/ITaskUseCaseDelete";
import {TaskRepository} from "@/@core/help/axios/task/repository/TaskRepository";
import {TaskUseCaseDelete} from "@/@core/help/axios/task/useCases/taskUseCaseDelete/TaskUseCaseDelete";


export const exclude = async (params: ITaskUseCaseDelete.Params) => {
  const taskRepository = new TaskRepository()
  const taskUseCaseDelete = new TaskUseCaseDelete(taskRepository)

  return taskUseCaseDelete.delete(params)
}