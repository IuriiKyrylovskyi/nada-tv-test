import Main from "../api/main";

const fetchScheduleItems = async () => {
  const Api = Main.getInstance();

  const items = await Api.getSchedule();

  return items;
};

export default fetchScheduleItems;

