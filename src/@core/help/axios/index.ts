import {signIn} from "@/@core/help/axios/signIn-signUp/useCases/userUseCaseSignIn";
import {signUp} from "@/@core/help/axios/signIn-signUp/useCases/userUseCaseSignUp";
import {getAll} from "@/@core/help/axios/task/useCases/taskUseCaseGetAll";
import {post} from "@/@core/help/axios/task/useCases/taskUseCasePost";
import {put} from "@/@core/help/axios/task/useCases/taskUseCasePut";
import {get} from "@/@core/help/axios/task/useCases/taskUseCaseGet";
import {exclude} from "@/@core/help/axios/task/useCases/taskUseCaseDelete";
import {search} from "@/@core/help/axios/task/useCases/taskUseCaseSearch";


export const http = {
  signIn,
  signUp,
  getAll,
  post,
  put,
  get,
  exclude,
  search
}