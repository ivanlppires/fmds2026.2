import express from 'express';
import alunos from './routes/alunos.js';
import disciplinas from './routes/disciplinas.js';
const router = express.Router();
router.use('/alunos', alunos);
router.use('/disciplinas', disciplinas);
export default router;