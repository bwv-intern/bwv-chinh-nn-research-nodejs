import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entities/user';
console.log(process.env.DB_HOST);
export const appDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  //   host: process.env.DB_HOST,
  //   port: process.env.DB_PORT,
  port: 3306,
  //   username: process.env.DB_USERNAME,
  username: 'root',
  //   password: process.env.DB_PASSWORD,
  password: '',
  //   database: process.env.DB_NAME,
  database: 'learning-node',
  entities: [User],
  logging: true,
  synchronize: true,
});
