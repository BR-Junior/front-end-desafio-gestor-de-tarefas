import * as yup from 'yup'
import type {ITaskUseCasePut} from "@/help/axios/task/useCases/taskUseCasePut/ITaskUseCasePut";



export const taskSchemaPut: yup.ObjectSchema<Omit<ITaskUseCasePut.Params, 'token' | 'idUser' | 'id'>> = yup.object().shape({
  task: yup.string().required('task é obrigatorio'),
  priority: yup.string().required('priority é obrigatorio').oneOf(['low', 'normal', 'high'], 'priority invalida'),
  status: yup.string().required('status é obrigatorio').oneOf(['open', 'doing', 'finished'], 'status invalido'),
})