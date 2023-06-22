import apisauce from 'apisauce';

const getHost = () => {
  const host = window.location.host;
  if(host.match(/localhost/)) return `http://${window.location.host}`
  return `https://${window.location.host}`
}
export const BASE_URL = getHost();
// export const BASE_URL = `http://${window.location.hostname}:3000`;
const DEFAULT_TIMEOUT = 60000;

type Callback = ( response: Response ) => void;

interface Headers {
  "Content-Type"?: string,
  "Accept"?: string,
  Authorization?: string,
}

interface ThrowCallback {
  callback: Callback,
  data?: any,
  isFetching?: boolean,
  isFound?: boolean,
  isError?: boolean,
}

interface Response {
  data: any,
  isFetching: boolean,
  isFound: boolean,
  isError: boolean,
}

interface CallbackSend {
  data: any,
  state: Response,
}

export interface ApiBody {
  endpoint: string, 
  body?: any, 
  token?: string,
  headersType?: Headers,
  responseType?: string,

}
interface CreateApiRequest {
  token?: string,
  responseType?: string,
  headersType?: Headers,
  baseUrl: string,
}

const throwCallback = ( { callback, data = null, isFound = false, isFetching = false, isError =  false }: ThrowCallback ) => {
  callback(
    {data, isFetching, isFound, isError} ,
  );
}

const createApiRequest = ({ token, responseType, headersType, baseUrl }: CreateApiRequest) => {
  const headers: Headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...headersType,
  }
  if (token){ headers.Authorization = `BEARER ${token}`}
  const apiConfig: any = {
    baseURL: baseUrl,
    timeout: DEFAULT_TIMEOUT,
    headers: headers,
    responseType: 'application/json'
  }
  if (responseType){ apiConfig.responseType = responseType;}
  return apisauce.create(apiConfig);
}

class ServerRequest {
  constructor(baseUrl: string){
    if(baseUrl){
      this.baseUrl = baseUrl;
    }
  }
  private baseUrl: string = BASE_URL;
  private getData = async ({ endpoint, body, token, responseType, headersType  }: ApiBody, method: string, callback: Callback ) => {
    const api : any = createApiRequest({token, responseType, headersType, baseUrl: this.baseUrl});
  
    throwCallback({ callback, isFetching: true } );
  
    try {
      const response = await api[method](endpoint, body );
      const { data, status } = response;
      if (status === 200 && typeof data ===  'object' ) {
        const newData = data.data || data;
        throwCallback({ callback, data : newData, isFound: true })
      } else {
        throwCallback({ callback, data, isError: true })
      }
    } catch ( data ) {
      throwCallback({ callback, data, isError: true,})
    }
  }

  get = async (apiBody: ApiBody, callback: Callback ) => {
    this.getData(apiBody, 'get', callback);
  }

  post = async (apiBody: ApiBody, callback: Callback ) => {
    this.getData(apiBody, 'post', callback);
  }

}
export { ServerRequest }
