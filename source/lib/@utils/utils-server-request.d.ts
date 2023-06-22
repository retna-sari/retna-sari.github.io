declare type Callback = (response: Response) => void;
interface Headers {
    "Content-Type"?: string;
    "Accept"?: string;
    Authorization?: string;
}
interface Response {
    data: any;
    isFetching: boolean;
    isFound: boolean;
    isError: boolean;
}
interface ApiBody {
    endpoint: string;
    body?: any;
    token?: string;
    headersType?: Headers;
    responseType?: string;
}
declare class ServerRequest {
    constructor(baseUrl: string);
    private baseUrl;
    private getData;
    get: (apiBody: ApiBody, callback: Callback) => Promise<void>;
    post: (apiBody: ApiBody, callback: Callback) => Promise<void>;
}
export { ServerRequest };
