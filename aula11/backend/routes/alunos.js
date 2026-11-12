import express from 'express';
import * as alunos from '../controller/alunos.js'
import { verifyToken } from '../auth/firebase.js'; // importar a função de verificação do token
// proteger a rota com a verificacao jwt do google firebase 

const router = express.Router();
router.get('/', verifyToken, alunos.listar);
router.get('/:id', alunos.buscar);
router.post('/', alunos.cadastrar);
router.put('/:id', alunos.atualizar);
router.delete('/:id', alunos.remover);
export default router; 