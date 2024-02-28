import express  from 'express';
const router = express.Router();
import * as categoryController from './controller.js'
import { authMiddleware } from '../utills/utills.js';

router.get('/getCategoryData',authMiddleware,categoryController.getCategoryData)

export default router