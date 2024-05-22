"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_routes_1 = require("./modules/product/product.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//router endpoints
app.use('/api/products', product_routes_1.ProductRouters);
/* app.get("/", (req:Request, res:Response) => {
  res.send("Hello miki!");
}); */
exports.default = app;
