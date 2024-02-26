import { connectClient } from "../utills/utills.js"
import * as memberModel from './model.js'
import * as responsehandler from '../utills/responseHandler.js'

const addCart = async (req, res) => {
    try {
        const result = await connectClient(req, memberModel.addCart)
        if (!result.error) {
            responsehandler.sentSuccessResponse(res, result)
        } else {
            responsehandler.sentErrorResponse(res, result)
        }
    } catch {
        responsehandler.sentInternalServerErrorResponse(res)
    }
}

const decCart = async (req, res) => {
    try {
        const result = await connectClient(req, memberModel.decCart)
        if (!result.error) {
            responsehandler.sentSuccessResponse(res, result)
        } else {
            responsehandler.sentErrorResponse(res, result)
        }
    } catch {
        responsehandler.sentInternalServerErrorResponse(res)
    }
}

const getCartData = async (req, res) => {
    try {
        const result = await connectClient(req, memberModel.getCartData)
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

const deleteCartData=async(req,res)=>{
    try{
        const result = await connectClient(req, memberModel.deleteCartData)
        if (!result.error) {
            responsehandler.sentSuccessResponse(res, result)
        }
        else {
            responsehandler.sentErrorResponse(res, result)
        }
    }
    catch(err){
        console.log("err", err);
    }
}

const deleteCartAllData=async(req,res)=>{
    try{
        const result = await connectClient(req, memberModel.deleteCartAllData)
        if (!result.error) {
            responsehandler.sentSuccessResponse(res, result)
        }
        else {
            responsehandler.sentErrorResponse(res, result)
        }
    }
    catch(err){
        console.log("err", err);
    }
}

export {
    addCart,
    getCartData,
    deleteCartData,
    decCart,
    deleteCartAllData
}