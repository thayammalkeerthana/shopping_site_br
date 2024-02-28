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
        const result = await connectClient(req, productModel.addAdminProduct)
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
    addAdminProduct
}