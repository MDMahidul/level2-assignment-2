import { z } from 'zod';

const orderValidationSchema = z.object({
  email: z.string().email('Not valid email').nonempty('Email is required'),
  productId: z.string().nonempty('Product Id is required'),
  price: z.number().positive('Product price must be a positive number'),
  quantity: z.number().positive('Product quantity must be a positive number'),
});

export type Order = z.infer<typeof orderValidationSchema>;

export default orderValidationSchema;
