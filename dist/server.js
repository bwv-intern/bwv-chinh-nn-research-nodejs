"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const data_source_1 = require("./data-source");
const port = process.env.APP_PORT || 3000;
data_source_1.appDataSource
    .initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
    app_1.default.listen(port, () => {
        console.log('Server is running on port ', port);
    });
})
    .catch((err) => {
    console.error('Error during Data Source initialization:', err);
});
//# sourceMappingURL=server.js.map