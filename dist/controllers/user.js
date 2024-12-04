"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const format_1 = require("../utils/format");
const user_1 = require("../models/user");
class UserController {
    getAll = async (req, res, next) => {
        try {
            const users = await user_1.User.findAll();
            res.render('index', { title: 'Hello from User' });
        }
        catch (error) {
            console.log(error);
            res.json({
                message: 'An error occured',
            });
        }
    };
    getCreateView = async (req, res, next) => {
        try {
            res.render('create', { title: 'Create a new user' });
        }
        catch (error) {
            res.json({
                message: 'An error occured',
            });
        }
    };
    // async getById(req: Request, res: Response, next: NextFunction) {
    //   const id = req.params.id;
    //   return this.UserRepository.findOne({id});
    // }
    create = async (req, res, next) => {
        const newUser = {
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            age: +req.body.age,
            address: req.body.address,
            gender: req.body.gender,
            office: req.body.office,
            position: req.body.position,
            startDate: (0, format_1.formatDate)(req.body.startDate),
        };
        const createdUser = await user_1.User.create(newUser);
        res.status(201).json({
            message: 'User created successfully.',
            data: {
                user: createdUser,
            },
        });
    };
}
exports.UserController = UserController;
//# sourceMappingURL=user.js.map