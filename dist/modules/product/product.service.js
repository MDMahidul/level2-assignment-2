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
exports.ProductServices = void 0;
const porduct_model_1 = require("./porduct.model");
const createProduct = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield porduct_model_1.Product.create(productData);
    return result;
});
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield porduct_model_1.Product.find();
    return result;
});
const getSingleProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield porduct_model_1.Product.findById(productId);
    return result;
});
const deleteSingleProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield porduct_model_1.Product.findByIdAndDelete(productId);
    return result;
});
exports.ProductServices = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    deleteSingleProduct,
};
