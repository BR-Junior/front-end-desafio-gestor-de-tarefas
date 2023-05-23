import * as yup from 'yup'
import type {IUserUseCaseSignIn} from "@/@core/help/axios/signIn-signUp/useCases/userUseCaseSignIn/IUserUseCaseSignIn";


export const schema: yup.ObjectSchema<IUserUseCaseSignIn.Params> = yup.object().shape({
  email: yup.string().email('email obrigatório').required('email obrigatório'),
  password: yup.string().required('senha obrigatório')
})


