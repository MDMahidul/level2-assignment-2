import { Product } from "./porduct.model";
import { TProduct } from "./product.interface";

 
const createProduct = async(productData: TProduct)=>{
    const result = await Product.create(productData);

    return result;
}

const getAllProducts = async()=>{
    const result = await Product.find();

    return result;
}

export const ProductServices = {
  createProduct,
  getAllProducts,
};