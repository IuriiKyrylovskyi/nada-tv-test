import HttpClient from './http-client';

interface ILink {
  href: string,
}

interface ILinks {
  self: ILink,
  previousepisode: ILink,
  nextepisode: ILink
}

interface IImage {
  medium: string,
  original: string,
}
export interface IShow {
  id: number,
  name: string,
  genres: string[],
  status: string,
  schedule:{
    time: string,
    days:[
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ]
  },
  rating: { average: number },
  webChannel: {
    name: string,
  }
  image: IImage,
  summary: string,
}

export interface IScheduleItem {
  id: number,
  name: string,
  rating:{
    average: number | null
  },
  image: IImage,
  summary: string,
  show: IShow,
}

interface IActor {
  id: number,
  name: string,
  gender: string,
  image: IImage,
}

export interface ICast {
  person: IActor,
  character: IActor,
}

export const baseURL = 'https://api.tvmaze.com'

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

  public getSchedule = () => this.instance.get<IScheduleItem[]>(`/schedule`)
  
  public getShow = (id: string) => this.instance.get<IShow>(`/shows/${id}`)

  public getCast = (id: string) => this.instance.get<ICast[]>(`/shows/${id}/cast`)
}


export default Main;
