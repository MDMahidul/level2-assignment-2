"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const porduct_model_1 = require("../product/porduct.model");
const order_model_1 = require("./order.model");
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    // get the product data from orderData
    const { productId, quantity } = orderData;
    // get the ordered product data from db using productId
    const product = yield porduct_model_1.Product.findById(productId);
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
    yield product.save();
    const result = yield order_model_1.Order.create(orderData);
    return result;
});
// get all order
const getOrders = (email) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    // check if param query available or not
    if (email) {
        result = yield order_model_1.Order.find({ email: email });
    }
    else {
        result = yield order_model_1.Order.find();
    }
    return result;
});
exports.OrderServices = {
    createOrder,
    getOrders,
};
