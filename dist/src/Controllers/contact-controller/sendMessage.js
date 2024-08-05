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
function sendMessage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, subject, message, } = req.body;
        try {
            yield NodeMailerConfig_1.default.sendMail({
                from: "ahmed1768476@gmail.com",
                to: "ahmedibrahim28199@gmail.com",
                subject: subject,
                html: `<h1>Sender email: ${email}</h1><p>Message: ${message}</p>`,
            });
            res.sendStatus(200);
        }
        catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
}
exports.default = sendMessage;
