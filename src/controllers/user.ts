import { NextFunction, Request, Response } from 'express';
import { formatDate } from '../utils/format';
import { User } from '../models/user';

export class UserController {
  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const users = await User.findAll();
      res.render('index', { title: 'Hello from User' });
    } catch (error) {
      console.log(error);
      res.json({
        message: 'An error occured',
      });
    }
  };

  public getCreateView = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      res.render('create', { title: 'Create a new user' });
    } catch (error) {
      res.json({
        message: 'An error occured',
      });
    }
  };

  // async getById(req: Request, res: Response, next: NextFunction) {
  //   const id = req.params.id;
  //   return this.UserRepository.findOne({id});
  // }

  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const newUser = {
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      age: +req.body.age,
      address: req.body.address,
      gender: req.body.gender,
      office: req.body.office,
      position: req.body.position,
      startDate: formatDate(req.body.startDate),
    };

    const createdUser = await User.create(newUser);

    res.status(201).json({
      message: 'User created successfully.',
      data: {
        user: createdUser,
      },
    });
  };

  public getEditView = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const id = req.query?.id;

    const userFound = await User.findByPk(id as string);

    res.render('edit', { title: 'Edit', data: userFound });
  };
}
