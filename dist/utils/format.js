"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatToUIDate = exports.formatToSQLDate = void 0;
const formatToSQLDate = (date) => {
    const dateToFormat = new Date(date);
    const formattedDate = dateToFormat.toISOString().split('T')[0];
    return formattedDate;
};
exports.formatToSQLDate = formatToSQLDate;
const formatToUIDate = (date) => {
    const splittedDate = date.toString().split('-');
    const formattedDate = `${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`;
    return formattedDate;
};
exports.formatToUIDate = formatToUIDate;
//# sourceMappingURL=format.js.map