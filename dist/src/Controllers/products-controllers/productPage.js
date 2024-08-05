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
const productsSchema_1 = __importDefault(require("../../Models/productsSchema"));
const reviewsSchema_1 = __importDefault(require("../../Models/reviewsSchema"));
function productPage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const product = yield productsSchema_1.default.findById(id);
        const relatedProducts = yield productsSchema_1.default.find({
            category: product === null || product === void 0 ? void 0 : product.category,
        })
            .where("_id")
            .ne(id)
            .limit(3);
        const comments = yield reviewsSchema_1.default.find({ product_id: id });
        res.json({ product, relatedProducts, comments });
    });
}
exports.default = productPage;
