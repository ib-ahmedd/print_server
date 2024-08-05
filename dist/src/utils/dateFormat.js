"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dateFormat() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const date = new Date().getDate();
    return `${year}-${month.toString().length > 1 ? month : "0" + month}-${date.toString().length > 1 ? date : "0" + date}`;
}
exports.default = dateFormat;
