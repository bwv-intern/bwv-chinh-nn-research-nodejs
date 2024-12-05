import { QueryInterface, DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize:typeof DataTypes) {
    await queryInterface.changeColumn('Users', 'name', {
        type: Sequelize.STRING,
        allowNull: false
    });
    await queryInterface.changeColumn('Users', 'phoneNumber', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.changeColumn('Users', 'age', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
    await queryInterface.changeColumn('Users', 'gender', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.changeColumn('Users', 'address', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.changeColumn('Users', 'office', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.changeColumn('Users', 'position', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.changeColumn('Users', 'startDate', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },
  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.changeColumn('Users', 'name', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('Users', 'phoneNumber', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('Users', 'age', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
    await queryInterface.changeColumn('Users', 'gender', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('Users', 'address', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('Users', 'office', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('Users', 'position', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('Users', 'startDate', {
      type: Sequelize.STRING,
      allowNull: true
    });
  }
};