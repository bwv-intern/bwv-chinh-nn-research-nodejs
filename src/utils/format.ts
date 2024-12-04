export const formatDate = (date: string): Date => {
  const dateToFormat = new Date(date);

  const formattedDate = dateToFormat.toISOString().split('T')[0];

  return formattedDate as unknown as Date;
};
