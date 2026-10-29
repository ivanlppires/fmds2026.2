import express from 'express';
import { listar, buscar, cadastrar, atualizar, remover }
    from '../controllers/disciplinas.js'
const router = express.Router();
router.get('/', listar);
router.get('/:id', buscar);
router.post('/', cadastrar)
router.put('/:id', atualizar);
router.delete('/:id', remover);
export default router;