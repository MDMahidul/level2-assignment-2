import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';

export const orderSchema = new Schema<TOrder>({
  email: { type: String, required: [true, 'User email is required'] },
  productId: { type: String, required: [true, 'Product id is required'] },
  price: { type: Number, required: [true, 'Product price is required'] },
  quantity: { type: Number, required: [true, 'Product quantity is required'] },
});

export const Order = model<TOrder>('Order', orderSchema);
