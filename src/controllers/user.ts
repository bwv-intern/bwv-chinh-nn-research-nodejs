import { NextFunction, Request, Response } from 'express';
import { validate } from 'class-validator';
import { and, Op } from 'sequelize';
import { User } from '../models/user';
import { UserValidator } from '../validations/user';
import dayjs from 'dayjs';

export class UserController {
  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const query = req.query;

      const dateConditions = {};
      if (query?.dateStart) {
        dateConditions[Op.gte] = query?.dateStart;
      }
      if (query?.dateEnd) {
        dateConditions[Op.lte] = query?.dateEnd;
      }

      const options = and({
        startDate: {
          [Op.and]: dateConditions,
        },
      });

      const users = await User.findAll({
        where: options,
      });

      res.render('index', {
        title: 'List of Users',
        data: users,
        filter: {
          dateStart: query?.dateStart || '',
          dateEnd: query?.dateEnd || '',
        },
        dayjs,
      });
    } catch (error) {
      res.status(500).json({
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
      res.status(500).json({
        message: 'An error occured',
      });
    }
  };

  public getByEmail = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const email = req.params.email;
      const userExist = await User.findOne({
        where: {
          email,
        },
      });

      if (!userExist) {
        res.status(404).json({
          message: 'User not found.',
        });
        return;
      }

      res.status(200).json({
        message: 'User retrieved successfully.',
        data: userExist,
      });
    } catch (error) {
      res.status(500).json({
        message: 'An error occured',
      });
    }
  };

  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const userValidator = new UserValidator();
    userValidator.name = req.body.name;
    userValidator.phoneNumber = req.body.phoneNumber;
    userValidator.email = req.body.email;
    userValidator.age = Number(req.body.age);
    userValidator.address = req.body.address;
    userValidator.gender = req.body.gender;
    userValidator.office = req.body.office;
    userValidator.position = req.body.position;
    userValidator.startDate = req.body.startDate;

    const errors = await validate(userValidator);
    if (errors.length) {
      res.json({
        message: 'An error occurred',
        errors,
      });
      return;
    }

    try {
      const newUser = {
        name: userValidator.name,
        phoneNumber: userValidator.phoneNumber,
        email: userValidator.email,
        age: userValidator.age,
        address: userValidator.address,
        gender: userValidator.gender,
        office: userValidator.office,
        position: userValidator.position,
        startDate: userValidator.startDate,
      };

      await User.create(newUser);

      res.redirect('/users');
    } catch (error) {
      res.status(500).json({
        message: 'An error occured',
      });
    }
  };

  public getEditView = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const id = req.params?.id;

      const userFound = await User.findByPk(id as string);

      res.render('edit', { title: 'Edit', data: userFound });
    } catch (error) {
      res.status(500).json({
        message: 'An error occured',
      });
    }
  };

  public edit = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const id = req.body.id;

      const userFound = await User.findByPk(id as string);

      if (!userFound) {
        res.status(404).json({
          message: 'User not found',
        });
        return;
      }

      const updateUser = {
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        age: Number(req.body.age),
        address: req.body.address,
        gender: req.body.gender,
        office: req.body.office,
        position: req.body.position,
        startDate: req.body.startDate,
      };

      await User.update(updateUser, {
        where: { id: id },
      });

      res.redirect('/users');
    } catch (error) {
      res.status(500).json({
        message: 'An error occured',
      });
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.body.id;

      const userFound = await User.findByPk(id as string);

      if (!userFound) {
        res.status(404).json({
          message: 'User not found',
        });
        return;
      }

      await User.destroy({ where: { id } });

      res.redirect('/users');
    } catch (error) {}
  };
}
