import { Request, Response } from 'express';
import productValidationSchema from './product.validation';
import { ProductServices } from './product.service';

//controller for adding data
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodparseData = productValidationSchema.parse(productData);

    const result = await ProductServices.createProduct(zodparseData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong!',
      error: error,
    });
  }
};

//controller for get all data, also by searching
const getProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await ProductServices.getProducts(searchTerm as string);

    // show message if no data found for the search key
    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: searchTerm
          ? `No products found on matching search key ${searchTerm}`
          : 'No products found in the database!',
          data:null
      });
    }

    res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term ${searchTerm} fetched successfully!`
        : 'Products data retrieved from DB successfully!',
      data: result,
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Could not fetch any product!',
      error: error,
    });
  }
};

//controller for get single data
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProduct(productId);
    //console.log(result);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Could not fetch product!',
      error: error,
    });
  }
};

//controller for deleteing single data
const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteSingleProduct(productId);
    //console.log(result);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Could not delete product!',
      error: error,
    });
  }
};

//controller for updating data
const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedData = req.body;

    //check udpdate data validation
    const upDataValidation = productValidationSchema.parse(updatedData);

    const result = await ProductServices.updateSingleProduct(
      productId,
      upDataValidation,
    );
    //console.log(result);
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Could not update product!',
      error: error,
    });
  }
};

/* const searchProducts = async (req: Request, res: Response) => {
}; */

export const ProductController = {
  createProduct,
  getProducts,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
};
