import HttpClient from './http-client';

interface ILink {
  href: string,
}

interface ILinks {
  self: ILink,
  previousepisode: ILink,
  nextepisode: ILink
}
export interface IShow {
  id: number,
  url: string,
  name: string,
  type: string,
  language: string,
  genres:[],
  status: string,
  runtime: number,
  averageRuntime: number,
  premiered: string,
  ended: any | null,
  officialSite: string,
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
  weight: number,
  network:{
    id: number,
    name: string,
    country:{
      name: string,
      code: string,
      timezone: string
    },
    officialSite: string
  },
  webChannel: string | null,
  dvdCountry: string | null,
  externals: { tvrage: string | null, thetvdb: string | null, imdb: string },
  image: { medium: string, original: string },
  summary: string,
  updated: number,
  _links: ILinks,
}

export interface IScheduleItem {
  id: number,
  url: string,
  name: string,
  season: number,
  number: number,
  type: string,
  airdate: string,
  airtime: string,
  airstamp: string,
  runtime: number,
  rating:{
    average: null
  },
  image: null,
  summary: string,
  show: IShow,
  _links: ILinks,
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
}


export default Main;
