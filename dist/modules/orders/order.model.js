"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.orderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.orderSchema = new mongoose_1.Schema({
    email: { type: String, required: [true, 'User email is required'] },
    productId: { type: String, required: [true, 'Product id is required'] },
    price: { type: Number, required: [true, 'Product price is required'] },
    quantity: { type: Number, required: [true, 'Product quantity is required'] },
});
exports.Order = (0, mongoose_1.model)("Order", exports.orderSchema);
