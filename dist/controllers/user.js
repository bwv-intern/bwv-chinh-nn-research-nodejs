"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const data_source_1 = require("~/data-source");
const user_1 = require("~/entities/user");
class UserController {
    UserRepository = data_source_1.appDataSource.getRepository(user_1.User);
    async getAll(req, res, next) {
        return this.UserRepository.find();
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.js.map