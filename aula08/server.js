import express from 'express';

// importar o index.js (arquivo principal da aplicação com as rotas)
import index from './index.js';

const app = express();

// middlewares
app.use(express.json()); // converter o corpo da requisição para JSON
app.use('/', index); // indexa as rotas

const port = 3000;

// nodemon server.js
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});