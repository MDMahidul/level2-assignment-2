import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

// create product route
router.post('/',ProductController.createProduct);

//get all products
router.get('/',ProductController.getAllProducts);

export const ProductRouters=router;