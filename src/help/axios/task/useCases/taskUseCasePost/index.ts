import {TaskRepository} from "@/help/axios/task/repository/TaskRepository";
import {TaskUseCasePost} from "@/help/axios/task/useCases/taskUseCasePost/TaskUseCasePost";
import type {ITaskUseCasePost} from "@/help/axios/task/useCases/taskUseCasePost/ITaskUseCasePost";
import {validation} from "@/help/shared/validationBase/validation";
import {taskSchemaPost} from "@/help/axios/task/useCases/taskUseCasePost/validationSchema";


export const post = async (params: ITaskUseCasePost.Params) => {
  const taskRepository = new TaskRepository()
  const taskUseCasePost = new TaskUseCasePost(taskRepository)

  const isValid = await validation(params, taskSchemaPost)

  if (isValid.errors) return isValid

  return taskUseCasePost.post(params)
}