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
const sortColumn_1 = require("../../utils/sortColumn");
function shopPage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { page, sortOption, priceRange, selectedCategory } = req.body;
            let categoriesCount = {};
            const offset = (page - 1) * 9;
            const column = (0, sortColumn_1.sortColumn)(sortOption);
            const category = selectedCategory !== "default" ? { category: selectedCategory } : {};
            const products = yield productsSchema_1.default.find(category)
                .where("price")
                .lt(priceRange)
                .sort(column)
                .skip(offset)
                .limit(9);
            const productsCategories = yield productsSchema_1.default.distinct("category");
            const productsCount = yield productsSchema_1.default.countDocuments(category)
                .where("price")
                .lt(priceRange);
            const hotDeals = yield productsSchema_1.default.find({ sale: true }).limit(6);
            for (let i = 0; i < productsCategories.length; i++) {
                const count = yield productsSchema_1.default.countDocuments({
                    category: productsCategories[i],
                })
                    .where("price")
                    .lt(priceRange);
                categoriesCount = Object.assign(Object.assign({}, categoriesCount), { [productsCategories[i]]: count });
            }
            const data = {
                products,
                productsCategories,
                productsCount,
                hotDeals,
                categoriesCount,
            };
            res.json(data);
        }
        catch (err) {
            res.sendStatus(500);
            console.log(err);
        }
    });
}
exports.default = shopPage;
