import express from 'express';
import userController from '../controllers/UserController.js';


const router = express.Router();

router.post('/', userController.create);
router.get('/', userController.readAll);
router.get('/:id', userController.readOne);
router.put('/:id', userController.update);
router.delete('/:id', userController.remove);

export default router;