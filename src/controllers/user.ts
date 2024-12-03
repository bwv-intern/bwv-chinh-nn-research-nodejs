import { NextFunction, Request, Response } from 'express';
import { appDataSource } from '~/data-source';
import { User } from '~/entities/user';

export class UserController {
  private UserRepository = appDataSource.getRepository(User);

  async getAll(req: Request, res: Response, next: NextFunction) {
    return this.UserRepository.find();
  }

  //   async getById(req: Request, res: Response, next: NextFunction) {
  //     const id = req.params.id;
  //     return this.UserRepository.findOne(id);
  //   }
}
