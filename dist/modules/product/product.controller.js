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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_validation_1 = __importDefault(require("./product.validation"));
const product_service_1 = require("./product.service");
//controller for adding data
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const zodparseData = product_validation_1.default.parse(productData);
        const result = yield product_service_1.ProductServices.createProduct(zodparseData);
        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong!',
            error: error,
        });
    }
});
//controller for get all data, also by searching
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield product_service_1.ProductServices.getProducts(searchTerm);
        // show message if no data found for the search key
        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: searchTerm
                    ? `No products found on matching search key ${searchTerm}`
                    : 'No products found in the database!',
                data: null,
            });
        }
        res.status(200).json({
            success: true,
            message: searchTerm
                ? `Products matching search term ${searchTerm} fetched successfully!`
                : 'Products data retrieved from DB successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Could not fetch unknown product!',
            error: error,
        });
    }
});
//controller for get single data
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getSingleProduct(productId);
        //console.log(result);
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Could not fetch product!',
            error: error,
        });
    }
});
//controller for deleteing single data
const deleteSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.deleteSingleProduct(productId);
        //console.log(result);
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Could not delete product!',
            error: error,
        });
    }
});
//controller for updating data
const updateSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updatedData = req.body;
        //check udpdate data validation
        const upDataValidation = product_validation_1.default.parse(updatedData);
        const result = yield product_service_1.ProductServices.updateSingleProduct(productId, upDataValidation);
        //console.log(result);
        res.status(200).json({
            success: true,
            message: 'Product updated successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Could not update product!',
            error: error,
        });
    }
});
/* const searchProducts = async (req: Request, res: Response) => {
}; */
exports.ProductController = {
    createProduct,
    getProducts,
    getSingleProduct,
    deleteSingleProduct,
    updateSingleProduct,
};
