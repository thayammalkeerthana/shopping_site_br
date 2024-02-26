import express  from 'express';
const router = express.Router();
import * as memberController from './controller.js'
import { authMiddleware } from '../utills/utills.js';

// router.post('/',authMiddleware,memberController.create)
// router.put('/',authMiddleware,memberController.update)
// router.get('/',authMiddleware,memberController.getAll)
// router.get('/:id',authMiddleware,memberController.getOne)
// router.delete('/:id',authMiddleware,memberController.remove)

router.get('/getAllProduct',authMiddleware,memberController.getAllProduct)

export default router