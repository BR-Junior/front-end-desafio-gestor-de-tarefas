import {RepositoryTask} from "@/axios/task/repositories/RepositoryTask";
import {UseCaseTaskCreate} from "@/axios/task/useCase/TaskUseCaseCreate/UseCaseTaskCreate";


const repositoryTask = new RepositoryTask()

export const useCaseTaskCreate = new UseCaseTaskCreate(repositoryTask)

