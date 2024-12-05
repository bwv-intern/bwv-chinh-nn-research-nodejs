export const formatToUIDate = (date: Date): Date => {
  const splittedDate = date.toString().split('-');

  const formattedDate = `${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`;

  return formattedDate as unknown as Date;
};
