import { Product } from '../product/porduct.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (orderData: TOrder) => {
  // get the product data from orderData
  const { productId, quantity } = orderData;

  // get the ordered product data from db using productId
  const product = await Product.findById(productId);

  if (product === null) {
    throw new Error('Product not found!');
  }

  // check order quantity with the inventory quantity
  if (product.inventory.quantity < quantity) {
    throw new Error('Insufficient product in stock!');
  }

  // if product available then deduct quantity from the inventory
  product.inventory.quantity = product.inventory.quantity - quantity;

  //update product status based on quantity
  if (product.inventory.quantity === 0) {
    product.inventory.inStock = false;
  }
  //update inventory
  await product.save();

  const result = await Order.create(orderData);

  return result;
};

// get all order
const getOrders = async (email?: string) => {
  let result;
  // check if param query available or not
  if (email) {
    result = await Order.find({ email: email });
  } else {
    result = await Order.find();
  }

  return result;
};

export const OrderServices = {
  createOrder,
  getOrders,
};
