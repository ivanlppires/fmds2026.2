import express from 'express';
import indexRouter from './index.js';
const app = express();

// middlewares
app.use(express.json());
app.use('/', indexRouter);

const port = 3000;
app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port);
});