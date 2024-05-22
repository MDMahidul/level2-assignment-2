import express, { Request, Response } from 'express';
import orderValidationSchema from './order.validation';
import { OrderServices } from './order.service';
import { error } from 'console';

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
        
    } catch (err:any) {
        res.status(500).json({
          success: false,
          message: 'Product not found!',
        });
    }
}
const getOrders=async(req:Request,res:Response)=>{
    try {
        const { email } = req.query;
        const result = await OrderServices.getOrders(email as string);

        // if no data found on the search email
        if(result.length === 0){
            return res.status(404).json({
              success: false,
              message: email
                ? `Order not found on matching search email ${email}`
                : 'Order not found!',
              data: null,
            });
        }

        res.status(200).json({
          success: true,
          message: 'Orders fetched successfully!',
          data: result,
        });
        
    } catch (err:any) {
        res.status(500).json({
          success: false,
          message: err.message || 'Something went wrong!',
        });
    }
}

export const orderController = {
  createOrder,
  getOrders,
};