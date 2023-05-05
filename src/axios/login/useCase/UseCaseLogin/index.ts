import {RepositoryLogin} from "@/axios/login/repositories/RepositoryLogin";
import {UseCaseLogin} from "@/axios/login/useCase/UseCaseLogin/UseCaseLogin";


const repositoryLogin = new RepositoryLogin()

export const useCaseLogin = new UseCaseLogin(repositoryLogin)