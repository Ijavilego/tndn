import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
} from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

const applyCredentials = (token?: string) => {
  let req: AxiosRequestConfig = {};
  req.headers = {
    Authorization: `Bearer ${token}`,
  };
  return req;
};

const resolveResponse = (response: any): any => {
  if (response && response.data) {
    return response.data;
  }
  return response;
};

const resolveError = (err: AxiosError): AxiosResponse => {
  throw err.response;
};

const httpGet = (url: string, token?: string): Promise<any> => {
  return axiosInstance
    .get(url, applyCredentials(token))
    .then(resolveResponse)
    .catch(resolveError);
};

export const httpService = {
  get: httpGet,
};
