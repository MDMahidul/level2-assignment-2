import { z } from 'zod';

const variantsValidationSchema = z.object({
  type: z.string().nonempty('Varient type is required'),
  value: z.string().nonempty('Variant value is required'),
});

const inventoryValidationSchema = z.object({
  quantity: z.number().min(0, 'Quantity must be a non-negative number'),
  inStock: z.boolean().default(true),
});

// main validation schema
const productValidationSchema = z.object({
  name: z.string().nonempty('Product name is required'),
  description: z.string().nonempty('Product description is required'),
  price: z.number().positive('Product price must be a positive number'),
  category: z.string().nonempty('Product category is required'),
  tags: z.array(z.string().nonempty()).nonempty('Product tags are required'),
  variants: z
    .array(variantsValidationSchema)
    .nonempty('Product variants are required'),
  inventory: inventoryValidationSchema,
});

export type Product = z.infer<typeof productValidationSchema>;

export default productValidationSchema;
