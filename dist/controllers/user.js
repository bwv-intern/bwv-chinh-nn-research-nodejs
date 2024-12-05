"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const format_1 = require("../utils/format");
const user_1 = require("../models/user");
class UserController {
    getAll = async (req, res, next) => {
        try {
            const users = await user_1.User.findAll();
            res.render('index', {
                title: 'List of Users',
                data: users.map((user) => ({
                    ...user.dataValues,
                    startDate: (0, format_1.formatToUIDate)(user.startDate),
                })),
            });
        }
        catch (error) {
            res.status(500).json({
                message: 'An error occured',
            });
        }
    };
    getCreateView = async (req, res, next) => {
        try {
            res.render('create', { title: 'Create a new user' });
        }
        catch (error) {
            res.status(500).json({
                message: 'An error occured',
            });
        }
    };
    create = async (req, res, next) => {
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
                startDate: (0, format_1.formatToSQLDate)(req.body.startDate),
            };
            await user_1.User.create(newUser);
            res.redirect('/users');
        }
        catch (error) {
            res.status(500).json({
                message: 'An error occured',
            });
        }
    };
    getEditView = async (req, res, next) => {
        const id = req.params?.id;
        const userFound = await user_1.User.findByPk(id);
        res.render('edit', { title: 'Edit', data: userFound });
    };
    edit = async (req, res, next) => {
        try {
            const id = req.body.id;
            const userFound = await user_1.User.findByPk(id);
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
                startDate: (0, format_1.formatToSQLDate)(req.body.startDate),
            };
            await user_1.User.update(updateUser, {
                where: { id: id },
            });
            res.redirect('/users/edit/' + id);
        }
        catch (error) {
            res.status(500).json({
                message: 'An error occured',
            });
        }
    };
    delete = async (req, res, next) => {
        try {
            const id = req.body.id;
            const userFound = await user_1.User.findByPk(id);
            if (!userFound) {
                res.status(404).json({
                    message: 'User not found',
                });
                return;
            }
            await user_1.User.destroy({ where: { id } });
            res.redirect('/users');
        }
        catch (error) { }
    };
}
exports.UserController = UserController;
//# sourceMappingURL=user.js.map