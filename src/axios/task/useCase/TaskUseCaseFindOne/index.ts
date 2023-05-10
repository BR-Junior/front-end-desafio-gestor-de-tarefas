import {RepositoryTask} from "@/axios/task/repositories/RepositoryTask";
import {TaskUseCaseFindOne} from "@/axios/task/useCase/TaskUseCaseFindOne/TaskUseCaseFindOne";


const repositoryTask = new RepositoryTask()

 export const taskUseCaseFindOne = new TaskUseCaseFindOne(repositoryTask)
