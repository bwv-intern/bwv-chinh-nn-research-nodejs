import { NextFunction, Request, Response } from 'express';
import { appDataSource } from '../data-source';
import { User } from '../entities/user';

export class UserController {
  private UserRepository = appDataSource.getRepository(User);

  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      console.log(this, 'this');
      const users = await this.UserRepository.find();
      res.json({
        message: 'User retrived successfully.',
        data: users,
      });
    } catch (error) {
      console.log(error);
      res.json({
        message: 'An error occured',
      });
    }
  }

  //   async getById(req: Request, res: Response, next: NextFunction) {
  //     const id = req.params.id;
  //     return this.UserRepository.findOne(id);
  //   }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    console.log(req.body);

    res.json({
      message: 'oke',
    });
  }
}
