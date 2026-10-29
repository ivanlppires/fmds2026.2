import express from 'express';
import alunos from './routes/alunos.js';
import disciplinas from './routes/disciplinas.js';
const router = express.Router();
router.use('/alunos', alunos);
router.use('/disciplinas', disciplinas);
export default router;

/*
 EXERCÍCIO:

 1. Adicione a opção de buscar alunos por nome
 2. Adicione o campo idade
 3. Adicione a opção de buscar alunos por idade
 4. Implemente o crud de disciplinas (com fase)
 5. Adicione a opção de buscar disciplinas por fase

*/