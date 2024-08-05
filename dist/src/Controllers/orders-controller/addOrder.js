"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cartSchema_1 = __importDefault(require("../../Models/cartSchema"));
const ordersSchema_1 = __importDefault(require("../../Models/ordersSchema"));
const dateFormat_1 = __importDefault(require("../../utils/dateFormat"));
function addOrder(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { user_id, orders } = req.body;
            let number = 1;
            const ordersBuild = orders.map((item) => {
                if (number % 2 === 0) {
                    item.delivered = false;
                    number = number + 1;
                    console.log(number);
                    console.log(number % 2);
                    console.log("true");
                }
                else {
                    item.delivered = true;
                    number = number + 1;
                    console.log("false");
                    console.log(number);
                    console.log(number % 2);
                }
                item.reviewed = false;
                item.date_ordered = (0, dateFormat_1.default)();
                return item;
            });
            yield ordersSchema_1.default.insertMany(ordersBuild);
            yield cartSchema_1.default.deleteMany({ user_id });
            res.sendStatus(204);
        }
        catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
}
exports.default = addOrder;
