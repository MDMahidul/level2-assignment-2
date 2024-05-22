"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouters = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
// create product route
router.post('/', product_controller_1.ProductController.createProduct);
//get all products
router.get('/', product_controller_1.ProductController.getAllProducts);
//get single product
router.get('/:productId', product_controller_1.ProductController.getSingleProduct);
//delete single product
router.delete('/:productId', product_controller_1.ProductController.deleteSingleProduct);
exports.ProductRouters = router;
