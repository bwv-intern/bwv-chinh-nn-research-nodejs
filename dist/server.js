"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./config/database");
const port = process.env.APP_PORT || 3000;
database_1.sequelize
    .authenticate()
    .then(() => {
    console.log('Sequelize has been initialized!');
    app_1.default.listen(port, () => {
        console.log('Server is running on port', port);
    });
})
    .catch((err) => {
    console.error('Error during Sequelize initialization:', err);
});
//# sourceMappingURL=server.js.map