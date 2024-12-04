"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: 'mysql',
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
});
exports.sequelize = sequelize;
//# sourceMappingURL=database.js.map