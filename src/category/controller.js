import { connectClient } from "../utills/utills.js"
import * as categoryModel from './model.js'
import * as responsehandler from '../utills/responseHandler.js'

const getCategoryData = async (req, res) => {
    try {
        const result = await connectClient(req, categoryModel.getCategoryData)
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

export{
    getCategoryData
}