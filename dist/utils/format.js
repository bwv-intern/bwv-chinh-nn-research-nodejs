"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
const formatDate = (date) => {
    const dateToFormat = new Date(date);
    const formattedDate = dateToFormat.toISOString().split('T')[0];
    return formattedDate;
};
exports.formatDate = formatDate;
//# sourceMappingURL=format.js.map