import Axios from 'axios'
import { AxiosError, AxiosResponse } from 'axios'


const axios = Axios.create({
  baseURL: "/novel",
  method: 'get',
  timeout: 10000,
  headers: {
    'Content-type' : 'application/json; charset=utf-8'
  },
  responseType: 'json',
  proxy: {
    host: '127.0.0.1',
    port: 3000
  },
})


axios.interceptors.response.use(
  ((Response: AxiosResponse) => {
    return Response;
  }),
  ((error: AxiosError) => {
    switch (error.response?.status) {
      case 404:
        console.error('404だめ');
        break
      default :
        break
    }
    return Promise.reject(error);
  })
)

export default axios
