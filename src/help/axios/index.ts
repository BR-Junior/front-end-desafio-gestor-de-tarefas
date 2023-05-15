import {signIn} from "@/help/axios/SignIn-SignUp/useCases/userUseCaseSignIn";
import {signUp} from "@/help/axios/SignIn-SignUp/useCases/userUseCaseSignUp";
import {getAll} from "@/help/axios/task/useCases/taskUseCasesGetAll";


export const http = {
  signIn,
  signUp,
  getAll,
}