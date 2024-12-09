import dayjs, { ConfigType } from 'dayjs';
import lodash from 'lodash';

export const localHelpers = (app: any) => {
  app.locals.capitalizeText = lodash.capitalize;
  app.locals.formatDate = (date: ConfigType, formatPattern: string) => {
    return dayjs(date).format(formatPattern);
  };
};
