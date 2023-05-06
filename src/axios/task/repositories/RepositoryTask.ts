import axios from "axios";
import type { AxiosInstance } from "axios";
import type {ITaskRequestDTO, ITaskResponseDTO} from "@/axios/task/DTO/ITaskDTO";
import type {IRepositoryTask} from "@/axios/task/repositories/IRepositoryTask";


export const http:AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {"Content-Type": "application/json"}
})

export class RepositoryTask implements IRepositoryTask{
  private repository = http
  async findAll(url: string, dataTask: ITaskRequestDTO): Promise<any> {

    const response = await this.repository.get(url, {
      headers: {Authorization: dataTask.token},
      params: {
        // priority: dataTask.priority,
        // status: dataTask.status,
        // creationDate: dataTask.creationDate,
        idUser: dataTask.idUser
      }
    }).catch((error) => {
      if (error.response) return error.response
    })
    console.log(response.data)

    // const { id, task, priority, creationDate, status} = response.data

    // if (!id && !token) return response.data.error.message

    // const result = {id:id, task:task, priority:priority, creationDate:creationDate, status:status}

    return response

  }
}