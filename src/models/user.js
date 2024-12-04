'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    office: DataTypes.STRING,
    position: DataTypes.STRING,
    startDate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};