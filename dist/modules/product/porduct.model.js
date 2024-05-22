"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.productSchema = void 0;
const mongoose_1 = require("mongoose");
// sub schema
const variantsSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    value: { type: String, required: true },
});
// sub schema
const inventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
});
// main schema
exports.productSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, 'Product name is required'] },
    description: {
        type: String,
        required: [true, 'Product description is required'],
    },
    price: { type: Number, required: [true, 'Product price is required'] },
    category: { type: String, required: [true, 'Product category is required'] },
    tags: { type: [String], required: [true, 'Product tags is required'] },
    variants: {
        type: [variantsSchema],
        required: [true, 'Product variants is required'],
    },
    inventory: {
        type: inventorySchema,
        required: [true, 'Product inventory is required'],
    },
});
exports.Product = (0, mongoose_1.model)("Product", exports.productSchema);
