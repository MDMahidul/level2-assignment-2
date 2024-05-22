"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email('Not valid email').nonempty('Email is required'),
    productId: zod_1.z.string().nonempty('Product Id is required'),
    price: zod_1.z.number().positive('Product price must be a positive number'),
    quantity: zod_1.z.number().positive('Product quantity must be a positive number'),
});
exports.default = orderValidationSchema;
