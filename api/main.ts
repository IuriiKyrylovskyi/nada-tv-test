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
  _embedded:{
    cast: ICast[]
  }
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

class Main extends HttpClient {
	private static instanceCached: Main;

  private constructor() {
    super(process.env.NEXT_PUBLIC_BASE_URL!);
  }

	static getInstance = () => {
		if (!Main.instanceCached) {
			Main.instanceCached = new Main();
		}

		return Main.instanceCached;
	};

  public getSchedule = () => this.instance.get<IScheduleItem[]>(`/schedule`);
  
  public getShow = (id: string) => this.instance.get<IShow>(`/shows/${id}?embed=cast`); 
};

export default Main;
