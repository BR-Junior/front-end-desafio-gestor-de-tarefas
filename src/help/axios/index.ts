import {signIn} from "@/help/axios/SignIn-SignUp/useCases/userUseCaseSignIn";
import {signUp} from "@/help/axios/SignIn-SignUp/useCases/userUseCaseSignUp";


export const http = {
  signIn,
  signUp
}