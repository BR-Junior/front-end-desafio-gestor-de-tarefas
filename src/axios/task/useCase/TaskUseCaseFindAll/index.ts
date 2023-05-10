import {RepositoryTask} from "@/axios/task/repositories/RepositoryTask";
import {UseCaseTaskFindAll} from "@/axios/task/useCase/TaskUseCaseFindAll/UseCaseTaskFindAll";


const repositoryTask = new RepositoryTask()

export const useCaseTaskFindAll = new UseCaseTaskFindAll(repositoryTask)

export const Provider = () => {
  const repositoryTask = new RepositoryTask()
  const useCaseTaskFindAll = new UseCaseTaskFindAll(repositoryTask)

  return {
     useCaseTaskFindAll
  }

}