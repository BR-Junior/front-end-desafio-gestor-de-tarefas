import {RepositoryLogin} from "@/axios/repositories/RepositoryLogin";
import {UseCaseLogin} from "@/axios/useCases/UseCaseLogin/UseCaseLogin";


const repositoryLogin = new RepositoryLogin()

export const useCaseLogin = new UseCaseLogin(repositoryLogin)