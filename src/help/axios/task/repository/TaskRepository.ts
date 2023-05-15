import axios from "axios";
import type {AxiosInstance} from "axios";
import type {ITaskUseCasesGetAll} from "@/help/axios/task/useCases/taskUseCasesGetAll/ITaskUseCasesGetAll";


export const http:AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333/',
})

export class TaskRepository implements
  ITaskUseCasesGetAll{
  private repoHttp = http

  async getAll(params:ITaskUseCasesGetAll.Params): Promise<ITaskUseCasesGetAll.Result> {
    return await this.repoHttp.get('task', {
      headers: {Authorization: params.token},
      params: params
    }).then(response => response.data)
      .catch(error => error.response)
  }
}