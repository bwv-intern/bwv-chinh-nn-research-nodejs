import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface IUser {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  age: number;
  address: string;
  gender: 'MALE' | 'FEMALE';
  office: string;
  position: string;
  startDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
export interface IUserInput extends Optional<IUser, 'id'> {}
export interface IUserOutput extends Required<IUser> {}

export class User extends Model<IUser, IUserInput> implements IUser {
  public id: number;
  public name: string;
  public phoneNumber: string;
  public email: string;
  public age: number;
  public address: string;
  public gender: 'MALE' | 'FEMALE';
  public office: string;
  public position: string;
  public startDate: Date;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;
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
