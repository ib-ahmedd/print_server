"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findMean(array) {
    const count = array.length;
    let total = 0;
    array.forEach((item) => {
        total = total + item.rating;
    });
    const mean = Math.floor(total / count);
    return mean;
}
exports.default = findMean;
