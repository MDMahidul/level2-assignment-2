import { Product } from './porduct.model';
import { TProduct } from './product.interface';

const createProduct = async (productData: TProduct) => {
  const result = await Product.create(productData);

  return result;
};

const getProducts = async (searchTerm?: string) => {
  let result;

  // check if it's get search or simply get all data
  if (searchTerm) {
    //handle case insensitive
    const searchKey = new RegExp(searchTerm, 'i');
    result = await Product.find({
      $or: [
        { name: { $regex: searchKey } },
        { description: { $regex: searchKey } },
        { category: { $regex: searchKey } },
      ],
    });
  } else {
    result = await Product.find();
  }

  return result;
};

const getSingleProduct = async (productId: string) => {
  const result = await Product.findById(productId);

  return result;
};

const deleteSingleProduct = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);

  return result;
};

const updateSingleProduct = async (
  productId: string,
  productUpdatedData: TProduct,
) => {
  const result = await Product.findByIdAndUpdate(
    productId,
    productUpdatedData,
    { new: true },
  );

  return result;
};



export const ProductServices = {
  createProduct,
  getProducts,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
};
