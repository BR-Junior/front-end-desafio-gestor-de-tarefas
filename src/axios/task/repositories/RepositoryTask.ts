import axios from "axios";
import type { AxiosInstance } from "axios";
import type {ITaskCreateDTO, ITaskRequestDTO, ITaskResponseDTO} from "@/axios/task/DTO/ITaskDTO";
import type {IRepositoryTask} from "@/axios/task/repositories/IRepositoryTask";
import type {ITaskUseCaseDelete} from "@/axios/task/useCase/TaskUseCaseDelete/ITaskUseCaseDelete";
import type {ITaskUseCaseFindOne} from "@/axios/task/useCase/TaskUseCaseFindOne/ITaskUseCaseFindOne";
import type {ITaskUseCaseUpdate} from "@/axios/task/useCase/TaskUseCaseUpdate/ITaskUseCaseUpdate";


export const http:AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333/'
})
export class RepositoryTask implements IRepositoryTask,
  ITaskUseCaseDelete,
  ITaskUseCaseFindOne,
  ITaskUseCaseUpdate{
  private repository = http
  async findAll(url: string, dataTask: ITaskRequestDTO) {

    const response = await this.repository.get(url, {
      headers: {Authorization: dataTask.token},
      params: dataTask
    }).catch((error) => {
      if (error.response) return error.response
    })


    return response.data as ITaskResponseDTO

  }

  async create(url: string, taskInputCreate:ITaskCreateDTO) {
    const response = await this.repository.post(url, taskInputCreate, {
      headers: {Authorization: taskInputCreate.token}
    }).catch((error) => {
      if (error.response) return error.response
    })

    if (response.data.errors) return response.data

    return response.data
}

  async delete(params: ITaskUseCaseDelete.Params) {
    const response = await http.delete(`${params.url}/${params.id}`, {
      headers: {Authorization: params.token},
    }).catch((error) => {
      if (error.response) return error.response
    })
    return response.data
  }

  async findOne(params: ITaskUseCaseFindOne.Params) {
    const response = await http.get(`${params.url}/${params.id}`, {
      headers: {Authorization: params.token}
    }).catch((error) => {
      if (error.response) return error.response
    })

    return response.data

  }

  async update(params: ITaskUseCaseUpdate.Params) {
    const { url, id, token, ...body  } = params
    const response = await this.repository.put(`${url}/${id}`, body, {
      headers: {Authorization: token}
    }).catch((error) => {
      if (error.response) return error.response
    })

    if (response.data.errors) return response.data

    return response.data
  }
}