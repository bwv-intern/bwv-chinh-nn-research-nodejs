import express from 'express';
import { UserController } from '../controllers/user';

const userRouter = express.Router();

const userController = new UserController();

userRouter.get('/', userController.getAll.bind(userController));

userRouter.post('/create', userController.create.bind(UserController));

export { userRouter };
