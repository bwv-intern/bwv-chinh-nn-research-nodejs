import { Dialect, Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: process.env.DIALECT as Dialect,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export { sequelize };
