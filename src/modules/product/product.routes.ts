import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

// create product route
router.post('/',ProductController.createProduct);

//get all products
router.get('/',ProductController.getAllProducts);

//get single product
router.get('/:productId', ProductController.getSingleProduct);

//delete single product
router.delete('/:productId', ProductController.deleteSingleProduct);

export const ProductRouters=router;