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
const bcrypt_1 = __importDefault(require("bcrypt"));
const usersSchema_1 = __importDefault(require("../../Models/usersSchema"));
const generateToken_1 = __importDefault(require("../../Helpers/generateToken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { user_name, email, user_password, mobile_no, address, country, city, state, } = req.body;
            const salt = yield bcrypt_1.default.genSalt(10);
            const hashedPassword = yield bcrypt_1.default.hash(user_password, salt);
            const user = yield usersSchema_1.default.create({
                user_name,
                email,
                user_password: hashedPassword,
                mobile_no,
                address,
                country,
                city,
                state,
            });
            user.user_password = "";
            const accessToken = (0, generateToken_1.default)({ user: email }, process.env.ACCESS_TOKEN_SECRET);
            res.json({ user, accessToken });
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.default = registerUser;
