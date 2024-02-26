import CONFIG from "./config.js"

const sentSuccessResponse = (res, resObj ={}) =>{
    resObj.statusCode = CONFIG.SUCCES_CODE
    res.status(CONFIG.SUCCES_CODE).json(resObj)
}

const sentErrorResponse = (res, resObj ={}) =>{
    resObj.statusCode = CONFIG.ERROR_CODE
    res.status(CONFIG.ERROR_CODE).json(resObj)
}

const sentInternalServerErrorResponse = (res,resObj={}) =>{
    resObj.statusCode = CONFIG.INTERNAL_SERVER_ERROR
    resObj.status = "Internel Server Error"
    res.status(CONFIG.INTERNAL_SERVER_ERROR).json(resObj)
}

const sentTokenMissingErrorResponse = (res,resObj={}) =>{
    resObj.statusCode = CONFIG.UNAUTHORIZED
    resObj.status = "Unauthorized accesing"
    res.status(CONFIG.UNAUTHORIZED).json(resObj)
}

const sentTokenExpiredErrorResponse = (res,resObj={}) =>{
    resObj.statusCode = CONFIG.FORBIDDEN
    resObj.status = "Token expired"
    res.status(CONFIG.FORBIDDEN).json(resObj)
}
export {
    sentSuccessResponse,
    sentErrorResponse,
    sentInternalServerErrorResponse,
    sentTokenMissingErrorResponse,
    sentTokenExpiredErrorResponse
}