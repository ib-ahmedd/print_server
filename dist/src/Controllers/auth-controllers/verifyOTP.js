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
const generateToken_1 = __importDefault(require("../../Helpers/generateToken"));
const OTPsSchema_1 = __importDefault(require("../../Models/OTPsSchema"));
function verifyOTP(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, code } = req.body;
            const response = yield OTPsSchema_1.default.findOne({ email: email, code: code });
            if (response) {
                OTPsSchema_1.default.deleteMany({ email: email });
                const authToken = (0, generateToken_1.default)({ user: email }, process.env.AUTH_TOKEN_SECRET);
                res.json(authToken);
            }
            else {
                res.sendStatus(404);
            }
        }
        catch (err) {
            console.log(err);
            res.json(500);
        }
    });
}
exports.default = verifyOTP;
