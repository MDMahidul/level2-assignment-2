import { Request, Response } from 'express';
import productValidationSchema from './product.validation';
import { ProductServices } from './product.service';

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

const getAllProducts=async(req:Request,res:Response)=>{
    try {
        const result = await ProductServices.getAllProducts();

        res.status(200).json({
          success: true,
          message: 'Products data retrieved from DB successfully!',
          data: result,
        });
    } catch (error:any) {
        res.status(500).json({
          success: false,
          message: 'Could not fetch any product!',
          error: error,
        });
    }
}

export const ProductController = {
  createProduct,
  getAllProducts,
};
