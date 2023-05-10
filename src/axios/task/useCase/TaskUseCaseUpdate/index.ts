import {RepositoryTask} from "@/axios/task/repositories/RepositoryTask";
import {TaskUseCaseUpdate} from "@/axios/task/useCase/TaskUseCaseUpdate/TaskUseCaseUpdate";


const repositoryTask = new RepositoryTask()

 export const taskUseCaseUpdate = new TaskUseCaseUpdate(repositoryTask)
