import express  from 'express';
const router = express.Router();
import * as cartController from './controller.js'
import { authMiddleware } from '../utills/utills.js';

router.post('/addCart',authMiddleware,cartController.addCart)
router.post('/decCart',authMiddleware,cartController.decCart)
router.get('/getCartData/:id',authMiddleware,cartController.getCartData)
router.delete('/deleteCartData/:id',authMiddleware,cartController.deleteCartData)
router.delete('/deleteCartAllData/:id',authMiddleware,cartController.deleteCartAllData)
router.get('/getCartDetail/:id',authMiddleware,cartController.getCartDetail)

export default router