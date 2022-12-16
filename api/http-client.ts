import axios, { AxiosInstance, AxiosResponse } from 'axios';

abstract class HttpClient {
	protected readonly instance: AxiosInstance;

	protected constructor(baseURL: string | undefined, contentType = 'application/json') {
		this.instance = axios.create({
			baseURL,
			headers: {
				'Content-Type': contentType,
			},
		});

		this.initializeResponseInterceptor();
	}

	private initializeResponseInterceptor = () => {
		this.instance.interceptors.response.use(this.handleSuccessResponse, this.handleResponseError);
	};

	private handleSuccessResponse = ({ data }: AxiosResponse) => data;

  private handleResponseError = async (e: any): Promise<any> => {
    return Promise.reject(e);
  };

}

export default HttpClient;
