import {RepositoryTask} from "@/axios/task/repositories/RepositoryTask";
import {UseCaseTaskFindAll} from "@/axios/task/useCase/UseCaseLogin/UseCaseTaskFindAll";


const repositoryTask = new RepositoryTask()

export const useCaseTaskFindAll = new UseCaseTaskFindAll(repositoryTask)