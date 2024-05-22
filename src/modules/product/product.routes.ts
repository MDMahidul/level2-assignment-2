import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

// create product route
router.post('/',ProductController.createProduct);

//get all products and also search items
router.get('/',ProductController.getProducts);

//get single product
router.get('/:productId', ProductController.getSingleProduct);

//delete single product
router.delete('/:productId', ProductController.deleteSingleProduct);

//update single product
router.put('/:productId', ProductController.updateSingleProduct);

//update single product
//router.put('/:productId', ProductController.updateSingleProduct);

export const ProductRouters=router;