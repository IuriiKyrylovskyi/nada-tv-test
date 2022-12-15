import HttpClient from "./http-client";

interface IShow {
  show: any;
}

const baseURL = 'https://api.tvmaze.com'

class Main extends HttpClient {
	private static instanceCached: Main;

  private constructor() {
    super(baseURL);
  }

	static getInstance = () => {
		if (!Main.instanceCached) {
			Main.instanceCached = new Main();
		}

		return Main.instanceCached;
	};

  public getSchedule = (pageNumber = '1') => this.instance.get<any>(`/schedule?page=${pageNumber}`)
  
  public getShows = (id: string) => this.instance.get<IShow>(`/shows/${id}`)
}


export default Main;
