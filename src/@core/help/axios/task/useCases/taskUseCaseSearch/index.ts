import type {ITaskUseCaseSearch} from "@/@core/help/axios/task/useCases/taskUseCaseSearch/ITaskUseCaseSearch";
import {TaskRepository} from "@/@core/help/axios/task/repository/TaskRepository";
import {TaskUseCaseSearch} from "@/@core/help/axios/task/useCases/taskUseCaseSearch/TaskUseCaseSearch";


export const search = async (params: ITaskUseCaseSearch.Params) => {
  const taskRepository = new TaskRepository()
  const taskUseCaseSearch = new TaskUseCaseSearch(taskRepository)

  return await taskUseCaseSearch.search(params)
}