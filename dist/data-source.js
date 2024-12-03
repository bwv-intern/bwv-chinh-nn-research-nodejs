"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const user_1 = require("./entities/user");
console.log(process.env.DB_HOST);
exports.appDataSource = new typeorm_1.DataSource({
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
    entities: [user_1.User],
    logging: true,
    synchronize: true,
});
//# sourceMappingURL=data-source.js.map