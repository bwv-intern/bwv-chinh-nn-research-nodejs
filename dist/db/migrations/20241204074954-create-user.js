"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('User', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            phoneNumber: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            age: {
                type: Sequelize.INTEGER
            },
            address: {
                type: Sequelize.STRING
            },
            gender: {
                type: Sequelize.STRING
            },
            office: {
                type: Sequelize.STRING
            },
            position: {
                type: Sequelize.STRING
            },
            startDate: {
                type: Sequelize.DATEONLY
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('User');
    }
};
//# sourceMappingURL=20241204074954-create-user.js.map