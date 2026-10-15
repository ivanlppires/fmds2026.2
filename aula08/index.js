import express from 'express';
import productRouter from './routes/ProductRouter.js';
import userRouter from './routes/UserRouter.js';

const router = express.Router();

router.use('/products', productRouter);
router.use('/users', userRouter);

export default router;