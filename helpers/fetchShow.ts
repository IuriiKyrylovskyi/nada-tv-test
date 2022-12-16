import Main from "../api/main";

const fetchShow = async (id: string) => {
  const Api = Main.getInstance();

  const show = await Api.getShow(id);

  return show;
};

export default fetchShow;

