"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const data_source_1 = require("~/data-source");
const user_1 = require("~/entities/user");
class UserController {
    UserRepository = data_source_1.appDataSource.getRepository(user_1.User);
    async getAll(req, res, next) {
        try {
            const users = this.UserRepository.find();
            res.json({
                message: 'User retrived successfully.',
                data: users,
            });
        }
        catch (error) {
            console.log(error);
            res.json({
                message: 'An error occured',
            });
        }
    }
    //   async getById(req: Request, res: Response, next: NextFunction) {
    //     const id = req.params.id;
    //     return this.UserRepository.findOne(id);
    //   }
    async create(req, res, next) {
        console.log(req.body);
        res.json({
            message: 'oke',
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.js.map