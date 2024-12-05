import { NextFunction, Request, Response } from 'express';
import { formatToSQLDate, formatToUIDate } from '../utils/format';
import { User } from '../models/user';
import { and, Op } from 'sequelize';

export class UserController {
  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const query = req.query;

      let options = {};
      if (query?.dateStart && query?.dateEnd) {
        options = and({
          startDate: {
            [Op.and]: {
              [Op.gte]: query?.dateStart,
              [Op.lte]: query?.dateEnd,
            },
          },
        });
      }

      if (query?.dateStart && !query?.dateEnd) {
        options = and({
          startDate: {
            [Op.gte]: query?.dateStart,
          },
        });
      }

      if (!query?.dateStart && query?.dateEnd) {
        options = and({
          startDate: {
            [Op.lte]: query?.dateEnd,
          },
        });
      }

      const users = await User.findAll({
        where: options,
      });

      res.render('index', {
        title: 'List of Users',
        data: users.map((user) => ({
          ...user.dataValues,
          startDate: formatToUIDate(user.startDate),
        })),
        filter: {
          dateStart: query?.dateStart || '',
          dateEnd: query?.dateEnd || '',
        },
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

  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const newUser = {
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        age: +req.body.age,
        address: req.body.address,
        gender: req.body.gender,
        office: req.body.office,
        position: req.body.position,
        startDate: formatToSQLDate(req.body.startDate),
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
        age: +req.body.age,
        address: req.body.address,
        gender: req.body.gender,
        office: req.body.office,
        position: req.body.position,
        startDate: formatToSQLDate(req.body.startDate),
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
