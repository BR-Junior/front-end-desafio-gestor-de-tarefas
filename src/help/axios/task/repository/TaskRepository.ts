import axios from "axios";
import type {AxiosInstance} from "axios";
import type {ITaskUseCasesGetAll} from "@/help/axios/task/useCases/taskUseCasesGetAll/ITaskUseCasesGetAll";
import type {ITaskUseCasePost} from "@/help/axios/task/useCases/taskUseCasePost/ITaskUseCasePost";
import type {ITaskUseCasePut} from "@/help/axios/task/useCases/taskUseCasePut/ITaskUseCasePut";


export const http:AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333/',
})

export class TaskRepository implements
  ITaskUseCasesGetAll,
  ITaskUseCasePost,
  ITaskUseCasePut {
  private repoHttp = http

  async getAll(params:ITaskUseCasesGetAll.Params): Promise<ITaskUseCasesGetAll.Result> {
    return await this.repoHttp.get('task', {
      headers: {Authorization: params.token},
      params: params
    }).then(response => response.data)
      .catch(error => error.response)
  }

  async post(params: ITaskUseCasePost.Params): Promise<ITaskUseCasePost.Result> {
    const {token, ...newParams} = params
    return await this.repoHttp.post('task', newParams, {
      headers: {Authorization: token}
    }).then(response => response.data)
      .catch(error => error.response)
  }

  async put(params: ITaskUseCasePut.Params): Promise<ITaskUseCasePut.Result> {
    const {token, id, ...newParams} = params
    return await this.repoHttp.put(`task/${id}`, newParams, {
      headers: {Authorization: token}
    }).then(response => response.data)
      .catch(error => error.response)
  }

}