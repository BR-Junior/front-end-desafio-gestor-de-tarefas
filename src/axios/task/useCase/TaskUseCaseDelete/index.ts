import {RepositoryTask} from "@/axios/task/repositories/RepositoryTask";
import {TaskUseCaseDelete} from "@/axios/task/useCase/TaskUseCaseDelete/TaskUseCaseDelete";


const repositoryTask = new RepositoryTask()

 export const taskUseCaseDelete = new TaskUseCaseDelete(repositoryTask)
