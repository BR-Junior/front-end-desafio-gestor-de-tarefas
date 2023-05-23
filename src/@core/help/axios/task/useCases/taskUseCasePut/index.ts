import {TaskRepository} from "@/@core/help/axios/task/repository/TaskRepository";
import {TaskUseCasePut} from "@/@core/help/axios/task/useCases/taskUseCasePut/TaskUseCasePut";
import type {ITaskUseCasePut} from "@/@core/help/axios/task/useCases/taskUseCasePut/ITaskUseCasePut";
import {validation} from "@/@core/help/shared/validationBase/validation";
import {taskSchemaPut} from "@/@core/help/axios/task/useCases/taskUseCasePut/validationSchema";


export const put = async (params: ITaskUseCasePut.Params) => {
  const taskRepository = new TaskRepository()
  const taskUseCasePut = new TaskUseCasePut(taskRepository)

  const isValid = await validation(params, taskSchemaPut)

  if (isValid.errors) return isValid

  return taskUseCasePut.put(params)
}