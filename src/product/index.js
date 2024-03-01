import express  from 'express';
const router = express.Router();
import * as productController from './controller.js'
import { authMiddleware } from '../utills/utills.js';
import multer from 'multer';

const storage = multer.memoryStorage(); // You can change this to diskStorage if you want to store files on disk
const upload = multer({ storage: storage });

router.get('/getAllProduct',authMiddleware,productController.getAllProduct)
// router.post('/addAdminProduct',authMiddleware,productController.addAdminProduct)
router.post('/addAdminProduct', authMiddleware, upload.single('productimage'), productController.addAdminProduct);
router.get('/getCategoryProduct/:id',authMiddleware,productController.getCategoryProduct)
router.post('/getSearchProduct',authMiddleware,productController.getSearchProduct)

export default router