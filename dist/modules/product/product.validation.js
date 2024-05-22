"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const variantsValidationSchema = zod_1.z.object({
    type: zod_1.z.string().nonempty('Varient type is required'),
    value: zod_1.z.string().nonempty('Variant value is required'),
});
const inventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z.number().min(0, 'Quantity must be a non-negative number'),
    inStock: zod_1.z.boolean().default(true),
});
// main validation schema
const productValidationSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty('Product name is required'),
    description: zod_1.z.string().nonempty('Product description is required'),
    price: zod_1.z.number().positive('Product price must be a positive number'),
    category: zod_1.z.string().nonempty('Product category is required'),
    tags: zod_1.z.array(zod_1.z.string().nonempty()).nonempty('Product tags are required'),
    variants: zod_1.z
        .array(variantsValidationSchema)
        .nonempty('Product variants are required'),
    inventory: inventoryValidationSchema,
});
exports.default = productValidationSchema;
