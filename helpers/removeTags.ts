const removeTags = (str: string) => {
  if (str === null || str === '') return '';
  else str = str.toString();

  return str.replace(/(<([^>]+)>)/gi, '');
};

export default removeTags;