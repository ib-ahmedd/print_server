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
exports.default = createProducts;
const productsSchema_1 = __importDefault(require("../Models/productsSchema"));
const host = "http://localhost:4000";
const productsArray = [
    {
        product_name: "Black Printed Coffee Mug",
        product_image: "https://res.cloudinary.com/djnzi39nh/image/upload/v1722862109/black_printed_coffee_mug_xrmkbl.jpg",
        price: 15.5,
        category: "Mug",
        free_shipping: false,
        rating: 0,
        sold: 22,
        sale: false,
        date_in_stock: "2021-12-23",
    },
    {
        product_name: "Brown Printed Tshirt",
        product_image: "https://res.cloudinary.com/djnzi39nh/image/upload/v1722862225/brown_printed_tshirt_gky1i0.jpg",
        price: 25.3,
        category: "Tshirt",
        free_shipping: true,
        rating: 0,
        sold: 100,
        sale: true,
        date_in_stock: "2024-01-20",
    },
    {
        product_name: "Orange Printed Tshirt",
        product_image: "https://res.cloudinary.com/djnzi39nh/image/upload/v1722862225/orange_printed_tshirt_bq5wsa.jpg",
        price: 22.4,
        category: "Tshirt",
        free_shipping: false,
        rating: 0,
        sold: 53,
        sale: false,
        date_in_stock: "2023-12-04",
    },
    {
        product_name: "Dark Green Printed Tshirt",
        product_image: "https://res.cloudinary.com/djnzi39nh/image/upload/v1722862225/dark_green_printed_tshirt_u1dyzv.jpg",
        price: 21.2,
        category: "Tshirt",
        free_shipping: false,
        rating: 0,
        sold: 67,
        sale: false,
        date_in_stock: "2024-07-20",
    },
    {
        product_name: "Fathers Day Coffee Mug",
        product_image: "https://res.cloudinary.com/djnzi39nh/image/upload/v1722862225/fathers_day_coffee_mug_gpupp9.jpg",
        price: 17.9,
        category: "Mug",
        free_shipping: true,
        rating: 0,
        sold: 110,
        sale: true,
        date_in_stock: "2022-12-11",
    },
    {
        product_name: "Blue Printed Tshirt",
        product_image: "https://res.cloudinary.com/djnzi39nh/image/upload/v1722862225/green_printed_tshirt_q9xu02.jpg",
        price: 23.4,
        category: "Tshirt",
        free_shipping: false,
        rating: 0,
        sold: 37,
        sale: false,
        date_in_stock: "2023-01-12",
    },
    {
        product_name: "Navy Blue Printed Tshirt",
        product_image: "https://res.cloudinary.com/djnzi39nh/image/upload/v1722862225/dark_blue_printed_tshirt_ppuw9z.jpg",
        price: 14.7,
        category: "Tshirt",
        free_shipping: true,
        rating: 0,
        sold: 76,
        sale: false,
        date_in_stock: "2021-12-20",
    },
    {
        product_name: "Orange Printed Tshirt",
        product_image: "https://res.cloudinary.com/djnzi39nh/image/upload/v1722862225/orange_printed_tshirt_bq5wsa.jpg",
        price: 14.7,
        category: "Tshirt",
        free_shipping: true,
        rating: 0,
        sold: 76,
        sale: false,
        date_in_stock: "2021-12-20",
    },
    {
        product_name: "Personalised Mug",
        product_image: "https://res.cloudinary.com/djnzi39nh/image/upload/v1722862274/personalised_mug_blf2bt.jpg",
        price: 25,
        category: "Mug",
        free_shipping: false,
        rating: 0,
        sold: 56,
        sale: true,
        date_in_stock: "2022-02-12",
    },
    {
        product_name: "Pink Printed Tshirt",
        product_image: "https://res.cloudinary.com/djnzi39nh/image/upload/v1722862275/pink_printed_tshirt_lnctbm.jpg",
        price: 15,
        category: "Tshirt",
        free_shipping: false,
        rating: 0,
        sold: 86,
        sale: false,
        date_in_stock: "2022-12-10",
    },
    {
        product_name: "Valentines Day Special Mug",
        product_image: "https://res.cloudinary.com/djnzi39nh/image/upload/v1722862276/valentines_day_special_mug_j3bbfu.jpg",
        price: 18.2,
        category: "Mug",
        free_shipping: true,
        rating: 0,
        sold: 97,
        sale: false,
        date_in_stock: "2022-12-10",
    },
    {
        product_name: "White Printed Coffee Mug",
        product_image: "https://res.cloudinary.com/djnzi39nh/image/upload/v1722862227/white_printed_coffee_mug_thxfie.jpg",
        price: 19.3,
        category: "Mug",
        free_shipping: true,
        rating: 0,
        sold: 33,
        sale: true,
        date_in_stock: "2023-10-07",
    },
];
function createProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield productsSchema_1.default.insertMany(productsArray);
            console.log("products added successfully");
        }
        catch (e) {
            console.log(e);
        }
    });
}
