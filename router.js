import express  from 'express';
const router = express.Router();
import userRouter  from './src/user/index.js'
import memberRouter  from './src/member/index.js'
import cartRouter from './src/cart/index.js'

router.use('/users',userRouter)
router.use('/member',memberRouter)
router.use('/cart',cartRouter)

export default router;