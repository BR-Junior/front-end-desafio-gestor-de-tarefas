import {signIn} from "@/help/axios/signIn-signUp/useCases/userUseCaseSignIn";
import {signUp} from "@/help/axios/signIn-signUp/useCases/userUseCaseSignUp";
import {getAll} from "@/help/axios/task/useCases/taskUseCaseGetAll";
import {post} from "@/help/axios/task/useCases/taskUseCasePost";
import {put} from "@/help/axios/task/useCases/taskUseCasePut";
import {get} from "@/help/axios/task/useCases/taskUseCaseGet";
import {exclude} from "@/help/axios/task/useCases/taskUseCaseDelete";


export const http = {
  signIn,
  signUp,
  getAll,
  post,
  put,
  get,
  exclude
}