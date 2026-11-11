import express from 'express';
import alunosRouter from './routes/alunos.js';
const router = express.Router();

router.use('/alunos', alunosRouter);

export default router;