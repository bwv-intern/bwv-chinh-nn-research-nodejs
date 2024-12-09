import { QueryInterface, DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize:typeof DataTypes) {
    await queryInterface.changeColumn('Users', 'address', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },
  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.changeColumn('Users', 'address', {
      type: Sequelize.STRING,
      allowNull: false
    });
  }
};