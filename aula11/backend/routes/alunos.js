import express from 'express';
import * as alunos from '../controller/alunos.js'
const router = express.Router();
router.get('/', alunos.listar);
router.get('/:id', alunos.buscar);
router.post('/', alunos.cadastrar);
router.put('/:id', alunos.atualizar);
router.delete('/:id', alunos.remover);
export default router; 