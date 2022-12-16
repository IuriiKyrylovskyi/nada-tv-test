import Main from "../api/main";

const fetchShow = async (id: string) => {
  const Api = Main.getInstance();

  const items = await Api.getShow(id);

  return items;
};

export default fetchShow;

