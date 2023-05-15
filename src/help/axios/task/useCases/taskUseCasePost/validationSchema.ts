import * as yup from 'yup'
import type {ITaskUseCasePost} from "@/help/axios/task/useCases/taskUseCasePost/ITaskUseCasePost";



export const taskSchemaPost: yup.ObjectSchema<Omit<ITaskUseCasePost.Params, 'idUser' | 'token'>> = yup.object().shape({
  task: yup.string().required('task é obrigatorio'),
  priority: yup.string().required('priority é obrigatorio').oneOf(['low', 'normal', 'high'], 'priority invalida'),
  status: yup.string().required('status é obrigatorio').oneOf(['open', 'doing', 'finished'], 'status invalido'),
})