import { connectClient } from "../utills/utills.js"
import * as memberModel from './model.js'
import * as responsehandler from '../utills/responseHandler.js'
const create = async (req, res) => {
    try {
        const result = await connectClient(req, memberModel.create)
        if (!result.error) {
            responsehandler.sentSuccessResponse(res, result)
        } else {
            responsehandler.sentErrorResponse(res, result)
        }
    } catch {
        responsehandler.sentInternalServerErrorResponse(res)
    }
}
const update = async (req, res) => {
    try {
        const result = await connectClient(req, memberModel.update)
        if (!result.error) {
            responsehandler.sentSuccessResponse(res, result)
        } else {
            responsehandler.sentErrorResponse(res, result)
        }
    } catch (err) {
        responsehandler.sentInternalServerErrorResponse(res)
    }
}
const getAll = async (req, res) => {
    try {
        console.log("member start");
        const result = await connectClient(req, memberModel.getAll)
        if (!result.error) {
            console.log("member end");
            responsehandler.sentSuccessResponse(res, result)
        } else {
            responsehandler.sentErrorResponse(res, result)
        }
    } catch (err) {
        responsehandler.sentInternalServerErrorResponse(res)
    }
}
const getAllProduct = async (req, res) => {
    try {
        const result = await connectClient(req, memberModel.getAllProduct)
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


const getOne = async (req, res) => {
    try {
        const result = await connectClient(req, memberModel.getOne)
        if (!result.error) {
            responsehandler.sentSuccessResponse(res, result)
        } else {
            responsehandler.sentErrorResponse(res, result)
        }
    } catch (err) {
        responsehandler.sentInternalServerErrorResponse(res)
    }
}
const remove = async (req, res) => {
    try {
        const result = await connectClient(req, memberModel.remove)
        if (!result.error) {
            responsehandler.sentSuccessResponse(res, result)
        } else {
            responsehandler.sentErrorResponse(res, result)
        }
    } catch (err) {
        responsehandler.sentInternalServerErrorResponse(res)
    }
}
export {
    create,
    update,
    getAll,
    getOne,
    remove,
    getAllProduct
}