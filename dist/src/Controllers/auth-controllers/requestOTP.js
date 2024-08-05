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
const NodeMailerConfig_1 = __importDefault(require("../../Config/NodeMailerConfig"));
const OTPsSchema_1 = __importDefault(require("../../Models/OTPsSchema"));
const usersSchema_1 = __importDefault(require("../../Models/usersSchema"));
function requestOtp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, method } = req.body;
            const randomNumber = Math.floor(Math.random() * 10000);
            const userExists = yield usersSchema_1.default.findOne({ email: email });
            if (method === "register") {
                if (userExists) {
                    res.sendStatus(402);
                }
                else {
                    yield OTPsSchema_1.default.deleteMany({ email: email });
                    yield OTPsSchema_1.default.create({ email, code: randomNumber });
                    yield NodeMailerConfig_1.default.sendMail({
                        from: "ahmed1768476@gmail.com",
                        to: email,
                        subject: "Email Verication",
                        html: `<p>Use the code ${randomNumber} to verify your email</p>`,
                    });
                    res.sendStatus(200);
                }
            }
            else {
                if (userExists) {
                    yield OTPsSchema_1.default.deleteMany({ email: email });
                    yield OTPsSchema_1.default.create({ email, code: randomNumber });
                    yield NodeMailerConfig_1.default.sendMail({
                        from: "ahmed1768476@gmail.com",
                        to: email,
                        subject: "Email Verication",
                        html: `<p>Use the code ${randomNumber} to reset your password</p>`,
                    });
                    res.sendStatus(200);
                }
                else {
                    res.sendStatus(404);
                }
            }
        }
        catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
}
exports.default = requestOtp;
