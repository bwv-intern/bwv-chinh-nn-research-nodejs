import app from './app';
import { sequelize } from './config/database';

const port = process.env.APP_PORT || 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log('Sequelize has been initialized!');
    app.listen(port, () => {
      console.log('Server is running on port', port);
    });
  })
  .catch((err) => {
    console.error('Error during Sequelize initialization:', err);
  });
