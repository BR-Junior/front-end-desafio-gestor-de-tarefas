import * as yup from 'yup'
import type {IUserUseCaseSignIn} from "@/help/axios/signIn-signUp/useCases/userUseCaseSignIn/IUserUseCaseSignIn";


export const schema: yup.ObjectSchema<IUserUseCaseSignIn.Params> = yup.object().shape({
  email: yup.string().email('campo obrigatorio email').required('campo obrigatorio email'),
  password: yup.string().required('campo obrigatorio senha')
})


