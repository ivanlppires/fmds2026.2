import express from 'express';
import alunosRouter from './routes/alunos.js';
import { verifyToken } from './auth/firebase.js'; // importar a função de verificação do token

const router = express.Router();

router.use('/alunos', verifyToken, alunosRouter);

export default router;