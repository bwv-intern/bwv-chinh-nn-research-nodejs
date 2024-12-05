import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

interface IUser {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  age: number;
  address: string;
  gender: Gender;
  office: string;
  position: string;
  startDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
export interface IUserInput extends Optional<IUser, 'id'> {}
export interface IUserOutput extends Required<IUser> {}

export class User extends Model<IUser, IUserInput> implements IUser {
  declare id: number;
  declare name: string;
  declare phoneNumber: string;
  declare email: string;
  declare age: number;
  declare address: string;
  declare gender: Gender;
  declare office: string;
  declare position: string;
  declare startDate: Date;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    office: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelize,
  },
);
