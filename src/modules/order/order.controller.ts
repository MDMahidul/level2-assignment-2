import express, { Request, Response } from 'express';
import orderValidationSchema from './order.validation';
import { OrderServices } from './order.service';

const createOrder=async(req:Request,res:Response)=>{
    try {
        const orderData = req.body;
        const zodparseData = orderValidationSchema.parse(orderData);

        const result = await OrderServices.createOrder(zodparseData);

        res.status(200).json({
          success: true,
          message: 'Order created successfully!',
          data: result,
        });
        
    } catch (error:any) {
        res.status(500).json({
          success: false,
          message: error.message || 'Something went wrong!',
        });
    }
}

export const orderController={
    createOrder
}