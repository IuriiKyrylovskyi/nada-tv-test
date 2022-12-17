import Main from "../api/main";

const fetchSchedulePage = async (date: string) => {
  const Api = Main.getInstance();

  const items = await Api.getSchedulePage(date);

  return items;
};

export default fetchSchedulePage;

