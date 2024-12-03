import app from './app';
import { appDataSource } from './data-source';

const port = process.env.APP_PORT || 3000;

appDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    app.listen(port, () => {
      console.log('Server is running on port ', port);
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
