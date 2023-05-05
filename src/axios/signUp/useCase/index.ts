import {RepositorySignUp} from '@/axios/signUp/repositories/RepositorySignUp'
import {SignUpUseCase} from '@/axios/signUp/useCase/SignUpUseCase'

const repositorySignUp = new RepositorySignUp()

export const signUpUseCase = new SignUpUseCase(repositorySignUp)




