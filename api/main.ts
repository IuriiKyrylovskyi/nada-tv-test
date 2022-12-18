import HttpClient from './http-client';

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
    days: string[],
  },
  rating: { average: number | null },
  webChannel: {
    name: string,
  } | null,
  image: IImage | null,
  summary: string,
  _embedded?:{
    cast: ICast[]
  }
}

export interface IScheduleItem {
  id: number,
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
  
  public getSchedulePage = (date: string) => this.instance.get<IScheduleItem[]>(`/schedule?date=${date}`);
  
  public getShow = (id: string) => this.instance.get<IShow>(`/shows/${id}?embed=cast`); 
};

export default Main;
