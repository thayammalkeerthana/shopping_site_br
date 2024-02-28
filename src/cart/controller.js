import { connectClient } from "../utills/utills.js"
import * as cartModel from './model.js'
import * as responsehandler from '../utills/responseHandler.js'

const addCart = async (req, res) => {
    try {
        const result = await connectClient(req, cartModel.addCart)
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
        const result = await connectClient(req, cartModel.decCart)
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
        const result = await connectClient(req, cartModel.getCartData)
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
        const result = await connectClient(req, cartModel.deleteCartData)
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
        const result = await connectClient(req, cartModel.deleteCartAllData)
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