"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("~/controllers/user");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
const userController = new user_1.UserController();
userRouter.get('/', userController.getAll);
userRouter.post('/create', userController.create);
//# sourceMappingURL=users.js.map