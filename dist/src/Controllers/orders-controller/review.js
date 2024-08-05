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
const ordersSchema_1 = __importDefault(require("../../Models/ordersSchema"));
const productsSchema_1 = __importDefault(require("../../Models/productsSchema"));
const reviewsSchema_1 = __importDefault(require("../../Models/reviewsSchema"));
const dateFormat_1 = __importDefault(require("../../utils/dateFormat"));
const findMean_1 = __importDefault(require("../../utils/findMean"));
function review(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { order_id, product_id, user_id, rating, review_title, review, reviewer_name, } = req.body;
            const date_reviewed = (0, dateFormat_1.default)();
            yield reviewsSchema_1.default.create({
                user_id,
                product_id,
                rating,
                review_title,
                review,
                reviewer_name,
                date_reviewed,
            });
            yield ordersSchema_1.default.updateOne({ _id: order_id }, { reviewed: true });
            const productReviews = yield reviewsSchema_1.default.find({ product_id });
            const mean = (0, findMean_1.default)(productReviews);
            yield productsSchema_1.default.updateOne({ _id: product_id }, { rating: mean });
            res.sendStatus(204);
        }
        catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
}
exports.default = review;
