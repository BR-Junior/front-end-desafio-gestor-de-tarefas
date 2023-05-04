export interface ILoginRequestDTO {
  email: string
  password: string
}
export interface ILoginResponseDTO {
  id:string
  token:string
}