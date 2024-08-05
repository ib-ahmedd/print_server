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
function addToCart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { user_id, product_id, product_name, product_image, price, quantity, } = req.body;
            const itemInCart = yield cartSchema_1.default.findOne({
                user_id: user_id,
                product_id: product_id,
            });
            if (itemInCart) {
                const newQuantity = parseInt(itemInCart.quantity.toString()) +
                    parseInt(quantity.toString());
                itemInCart.quantity = newQuantity;
                itemInCart.save();
                res.json(itemInCart);
            }
            else {
                const cartItem = new cartSchema_1.default({
                    user_id,
                    product_id,
                    product_name,
                    product_image,
                    price,
                    quantity,
                });
                yield cartItem.save();
                res.json(cartItem);
            }
        }
        catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
}
exports.default = addToCart;
