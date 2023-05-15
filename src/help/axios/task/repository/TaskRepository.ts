import axios from "axios";
import type {AxiosInstance} from "axios";
import type {ITaskUseCaseGetAll} from "@/help/axios/task/useCases/taskUseCaseGetAll/ITaskUseCaseGetAll";
import type {ITaskUseCasePost} from "@/help/axios/task/useCases/taskUseCasePost/ITaskUseCasePost";
import type {ITaskUseCasePut} from "@/help/axios/task/useCases/taskUseCasePut/ITaskUseCasePut";
import type {ITaskUseCaseGet} from "@/help/axios/task/useCases/taskUseCaseGet/ITaskUseCaseGet";
import type {ITaskUseCaseDelete} from "@/help/axios/task/useCases/taskUseCaseDelete/ITaskUseCaseDelete";


export const http:AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333/',
})

export class TaskRepository implements
  ITaskUseCaseGetAll,
  ITaskUseCasePost,
  ITaskUseCasePut,
  ITaskUseCaseGet,
  ITaskUseCaseDelete {
  private repoHttp = http

  async getAll(params:ITaskUseCaseGetAll.Params): Promise<ITaskUseCaseGetAll.Result> {
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

  async get(params: ITaskUseCaseGet.Params): Promise<ITaskUseCaseGet.Result> {
    return await this.repoHttp.get(`task/${params.id}`,{
      headers: {Authorization: params.token}
    }).then(response => response.data)
      .catch(error => error.response)
  }

  async delete(params: ITaskUseCaseDelete.Params): Promise<ITaskUseCaseDelete.Result> {
    return await this.repoHttp.delete(`task/${params.id}`, {
      headers: {Authorization: params.token}
    }).catch(error => error.response)
  }
}