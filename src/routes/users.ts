import express from 'express';
import { UserController } from '../controllers/user';

const userRouter = express.Router();

const userController = new UserController();

userRouter.get('/', userController.getAll);

userRouter.get('/create', userController.getCreateView);

userRouter.get('/edit/:id', userController.getEditView);

userRouter.post('/create', userController.create);

export { userRouter };
