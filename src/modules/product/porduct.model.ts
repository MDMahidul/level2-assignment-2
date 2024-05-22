import { Schema, model } from 'mongoose';
import { TInventory, TProduct, TVariant } from './product.interface';

// sub schema
const variantsSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

// sub schema
const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
});

// main schema
export const productSchema = new Schema<TProduct>({
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

export const Product = model<TProduct>("Product",productSchema)