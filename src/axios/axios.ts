export {}
// import axios from "axios";
// import type { AxiosInstance } from "axios";
//
// export const http:AxiosInstance = axios.create({
//   baseURL: 'http://localhost:3333/',
// })
//
// type TDataLogin = {
//   email: string
//   password: string
// }
// export interface IReulst {
//   id:string
//   token:string
// }
// export interface IRepository {
//   postLogin(url:string, dataLogin:TDataLogin): Promise<IReulst>
//
// }
//
// export class HttpRepository implements IRepository{
//
//   private repository = http
//   async postLogin(url: string, dataLogin: TDataLogin): Promise<IReulst> {
//
//     const response = await this.repository.post(url, dataLogin).catch((error) => {
//
//       if (error.response) return error.response
//
//     })
//
//     const {id, token } = response.data
//
//     if (!id && !token) return response.data
//
//     const result = {id: id,token: token}
//
//     return result as IReulst
//
//   }
// }
//
// export class PostLoginUseCase {
//   constructor(private repo: IRepository) {}
//
//   async execute(url:string, dataLogin:TDataLogin): Promise<IReulst> {
//     const result = await this.repo.postLogin(url, dataLogin)
//
//     return result as IReulst
//   }
// }
//
// const repository = new HttpRepository()
// export const postLoginUseCase = new PostLoginUseCase(repository)
//
//
//
//
//
//
//
//
//
// // export const httpLoginPost = async (url:string, dataLogin:TDataLogin) => {
// //   const response = await http.post(url, dataLogin).catch((error) => {
// //
// //     if (error.response) return error.response
// //
// //   })
// //
// //   return response.data
// //
// // }
//
// // if (Object.keys(data).includes('token')) {
// //
// //   Object.assign(data, [])
// //   const storeUse = userStore()
// //
// //   storeUse.token = data
// //
// //   storeUse.tokenIdSet()
// //   storeUse.token
// // }
//
//
//
//
// // const result = await httpLoginPost('entrar', loginInput)
// //
// // if (result.error) {
// //   msg.value = 'E-mail ou Senha incorreta'
// //
// //   setTimeout(() => msg.value = '', 3000)
// // }
// //
// // const { id, token } = result
// //
// // if (id && token) {
// //
// //   const storeUse = userStore()
// //
// //   storeUse.id = id
// //   storeUse.token = token
// //
// //   storeUse.tokenIdSet()
// //
// //   return router.push('/task')
// // }
//
// // const result = await http.post('entrar', loginInput)
// //     .catch((error) => {
// //
// //       msg.value = 'E-mail ou Senha incorreta'
// //       setTimeout(() => msg.value = '', 3000)
// //
// //       if (error.response) menssageErro.value = true
// //     })
//
// // export const loginTeste = () => {
// //   http.post(url, data)
// //     .then((reponse) => (result = reponse.data))
// // }
// // import axios from "axios/index";
// //
// // interface ILoginData {
// //   email: string
// //   senha: string
// // }
// // async function get(data:ILoginData) {
// //   try {
// //     const response = await axios.post('http://localhost:3333/entrar', data)
// //     const { token, id } = response.data
// //     console.log(token, id)
// //   } catch (erro) {
// //     console.log()
// //   }
// // }
// // get()
//
//   // .catch((error) => {
//   //   if (error.response) return error.response.data.errors.message
//   // })