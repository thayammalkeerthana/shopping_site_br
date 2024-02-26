import express  from 'express';
const router = express.Router();
import * as memberController from './controller.js'
import { authMiddleware } from '../utills/utills.js';

router.post('/addCart',authMiddleware,memberController.addCart)
router.post('/decCart',authMiddleware,memberController.decCart)
router.get('/getCartData',authMiddleware,memberController.getCartData)
router.delete('/deleteCartData/:id',authMiddleware,memberController.deleteCartData)
router.delete('/deleteCartAllData',authMiddleware,memberController.deleteCartAllData)

export default router