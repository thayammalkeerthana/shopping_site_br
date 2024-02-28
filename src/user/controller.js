import { connectClient } from '../utills/utills.js';
import {createUser,loginUser,getData,updateData} from './model.js'
import * as responsehandler from '../utills/responseHandler.js'
import {v4 as uuidv4} from 'uuid'


const create = async (req,res) =>{
    try{
        req.body.userId = uuidv4();
        const result = await connectClient (req,createUser)
        if(!result.error){
            responsehandler.sentSuccessResponse(res, result)
        } else {
            responsehandler.sentErrorResponse(res, result)
        }
    } catch(error){
        console.log('error',error);
        responsehandler.sentInternalServerErrorResponse(res)
    }
}

const login = async (req,res) =>{
    try{
        const result = await connectClient (req,loginUser)
        if(!result.error){
            responsehandler.sentSuccessResponse(res, result)
        } else {
            responsehandler.sentErrorResponse(res, result)
        }
    } catch(error){
        console.log("controller err",error);
        responsehandler.sentInternalServerErrorResponse(res)
    }
}

const getRegData = async (req, res) => {
    try {
        const result = await connectClient(req,getData)
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

const updateRegData = async (req, res) => {
    try {
        const result = await connectClient(req, updateData)
        if (!result.error) {
            responsehandler.sentSuccessResponse(res, result)
        } else {
            responsehandler.sentErrorResponse(res, result)
        }
    } catch (err) {
        console.log("err",err);
        responsehandler.sentInternalServerErrorResponse(res)
    }
}

export {
    create,
    login,
    getRegData,
    updateRegData
}