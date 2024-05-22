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

const getSingleProduct = async(productId:string)=>{
    const result = await Product.findById(productId);

    return result
}

const deleteSingleProduct=async(productId:string)=>{
    const result = await Product.findByIdAndDelete( productId );

    return result;
}

export const ProductServices = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteSingleProduct,
};