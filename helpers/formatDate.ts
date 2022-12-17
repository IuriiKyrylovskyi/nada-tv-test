const formatDate = (date: number) => {
  const dateFormatter = Intl.DateTimeFormat('sv-SE');

  return dateFormatter.format(date);
}

export default formatDate;

