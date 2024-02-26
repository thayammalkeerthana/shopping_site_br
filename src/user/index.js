import express from 'express'
const router = express.Router();
import {create,login,getRegData,updateRegData} from'./controller.js'
import { authMiddleware } from '../utills/utills.js';

router.post('/register',create)
router.post('/login',login)
router.get('/getData',getRegData)
router.put('/updateRegData',authMiddleware,updateRegData)

export default router