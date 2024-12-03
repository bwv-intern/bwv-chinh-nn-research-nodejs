"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTest1733214327969 = void 0;
class createTest1733214327969 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE test (\n\
            id INT NOT NULL AUTO_INCREMENT,\n\
            title VARCHAR(40) NOT NULL,\n\
            PRIMARY KEY(id)\n\
        );`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE test;`);
    }
}
exports.createTest1733214327969 = createTest1733214327969;
//# sourceMappingURL=create-test.js.map