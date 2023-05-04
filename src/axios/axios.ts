import axios from "axios";
import type { AxiosInstance } from "axios";

export const http:AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333/',
})

// export const loginTeste = () => {
//   http.post(url, data)
//     .then((reponse) => (result = reponse.data))
// }










// import axios from "axios/index";
//
// interface ILoginData {
//   email: string
//   senha: string
// }
// async function get(data:ILoginData) {
//   try {
//     const response = await axios.post('http://localhost:3333/entrar', data)
//     const { token, id } = response.data
//     console.log(token, id)
//   } catch (erro) {
//     console.log()
//   }
// }
// get()

  // .catch((error) => {
  //   if (error.response) return error.response.data.errors.message
  // })