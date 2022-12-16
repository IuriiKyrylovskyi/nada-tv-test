import Main from "../api/main";

const fetchCast = async (id: string) => {
  const Api = Main.getInstance();

  const cast = await Api.getCast(id);

  return cast;
};

export default fetchCast;

