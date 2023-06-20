import 'axios';

declare module "axios" {
  export interface AxiosRequestConfig {
    retries?: number;
    retryCount?: number;
  }
}