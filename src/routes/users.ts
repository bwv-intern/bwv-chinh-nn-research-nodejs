import express from 'express';
import { UserController } from '../controllers/user';

const userRouter = express.Router();

const userController = new UserController();

userRouter.get('/', userController.getAll);

userRouter.get('/create', userController.getCreateView);

userRouter.get('/edit/:id', userController.getEditView);

userRouter.get('/users/email', userController.getByEmail);

userRouter.post('/create', userController.create);

userRouter.put('/edit', userController.edit);

userRouter.delete('/delete', userController.delete);

export { userRouter };
