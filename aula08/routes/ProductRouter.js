/* PRODUCT ROUTER - ROTAS DE PRODUTOS */
import express from 'express';
import controller from '../controllers/ProductController.js';

const router = express.Router();

router.post('/', controller.create);
router.get('/', controller.readAll);

export default router;