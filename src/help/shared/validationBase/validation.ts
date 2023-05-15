import type * as yup from "yup";


export const validation =  (data:any, schema:any ) => {
  return  schema.validate(data, {abortEarly: false}).
  catch((err: yup.ValidationError) => {
    const errors: { [key: string]: string } = {}
    err.inner.forEach(error => {
      // @ts-ignore
      errors[error.path] = error.message
    })
    // const result = {errors}
    // return result
    return {errors}
  })
}