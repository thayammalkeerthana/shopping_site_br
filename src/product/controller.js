import { connectClient } from "../utills/utills.js"
import * as productModel from './model.js'
import * as responsehandler from '../utills/responseHandler.js'

const getAllProduct = async (req, res) => {
    try {
        const result = await connectClient(req, productModel.getAllProduct)
        if (!result.error) {
            responsehandler.sentSuccessResponse(res, result)
        }
        else {
            responsehandler.sentErrorResponse(res, result)
        }
    }
    catch (err) {
        console.log("err", err);
    }
}

const addAdminProduct = async (req, res) => {
        try {
        const file = req.file; // Access the uploaded file
console.log("file,file",file);
        if (!file) {
            return responsehandler.sentErrorResponse(res, { error: true, message: "Please upload a file" });
        }

        const result = await connectClient(req, productModel.addAdminProduct, file);
        if (!result.error) {
            responsehandler.sentSuccessResponse(res, result);
        } else {
            responsehandler.sentErrorResponse(res, result);
        }
    } catch(err) {
        console.log("err",err);
        responsehandler.sentInternalServerErrorResponse(res);
    }
}

const getCategoryProduct = async (req, res) => {
    try {
        const result = await connectClient(req, productModel.getCategoryProduct)
        if (!result.error) {
            responsehandler.sentSuccessResponse(res, result)
        } else {
            responsehandler.sentErrorResponse(res, result)
        }
    } catch {
        responsehandler.sentInternalServerErrorResponse(res)
    }
}

const getSearchProduct = async (req, res) => {
    try {
        const result = await connectClient(req, productModel.getSearchProduct)
        if (!result.error) {
            responsehandler.sentSuccessResponse(res, result)
        } else {
            responsehandler.sentErrorResponse(res, result)
        }
    } catch {
        responsehandler.sentInternalServerErrorResponse(res)
    }
}
export {
    getAllProduct,
    addAdminProduct,
    getCategoryProduct,
    getSearchProduct,
}