import app from './app';
import { sequelize } from './config/database';

const port = process.env.APP_PORT || 3000;

sequelize
  .authenticate()
  .then(() => {
    app.listen(port, () => {});
  })
  .catch((err) => {
    throw err;
  });
