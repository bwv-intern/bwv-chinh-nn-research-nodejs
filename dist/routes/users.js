"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
const userController = new user_1.UserController();
userRouter.get('/', userController.getAll);
userRouter.get('/create', userController.getCreateView);
userRouter.get('/edit/:id', userController.getEditView);
userRouter.post('/create', userController.create);
userRouter.put('/edit', userController.edit);
userRouter.delete('/delete', userController.delete);
//# sourceMappingURL=users.js.map