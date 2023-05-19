import {TaskRepository} from "@/@core/help/axios/task/repository/TaskRepository";
import {TaskUseCasePost} from "@/@core/help/axios/task/useCases/taskUseCasePost/TaskUseCasePost";
import type {ITaskUseCasePost} from "@/@core/help/axios/task/useCases/taskUseCasePost/ITaskUseCasePost";
import {validation} from "@/@core/help/shared/validationBase/validation";
import {taskSchemaPost} from "@/@core/help/axios/task/useCases/taskUseCasePost/validationSchema";


export const post = async (params: ITaskUseCasePost.Params) => {
  const taskRepository = new TaskRepository()
  const taskUseCasePost = new TaskUseCasePost(taskRepository)

  const isValid = await validation(params, taskSchemaPost)

  if (isValid.errors) return isValid

  return taskUseCasePost.post(params)
}