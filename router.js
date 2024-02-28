import express  from 'express';
const router = express.Router();
import userRouter  from './src/user/index.js'
import productRouter  from './src/product/index.js'
import cartRouter from './src/cart/index.js'
import categoryRouter from './src/category/index.js'

router.use('/users',userRouter)
router.use('/product',productRouter)
router.use('/cart',cartRouter)
router.use('/category',categoryRouter)

export default router;