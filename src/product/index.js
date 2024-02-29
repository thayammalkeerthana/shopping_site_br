import express  from 'express';
const router = express.Router();
import * as productController from './controller.js'
import { authMiddleware } from '../utills/utills.js';

router.get('/getAllProduct',authMiddleware,productController.getAllProduct)
router.post('/addAdminProduct',authMiddleware,productController.addAdminProduct)
router.get('/getCategoryProduct/:id',authMiddleware,productController.getCategoryProduct)

export default router