import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

// create order
router.post('/', orderController.createOrder);

export const OrderRouters = router;