"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: process.env.FRONTEND_URL }));
app.use(router_1.default);
const server = app.listen(process.env.APP_PORT, () => console.log(`
🚀 Server ready at: process.env.APP_PORT
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`));
//V1 fini
