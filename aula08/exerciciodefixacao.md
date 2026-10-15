# Exercício de Fixação – Aula 08

## Tema: API REST com Express – rotas, controllers e CRUD em memória

Na aula de hoje construímos uma API em Node.js com Express organizada em camadas:

```
Cliente (Thunder Client / Insomnia / curl)
   │   GET /users/2
   ▼
server.js ───► app.use(express.json()) ───► app.use('/', index)
   ▼
index.js ───► router.use('/users', userRouter)
   ▼
routes/UserRouter.js ───► router.get('/:id', userController.readOne)
   ▼
controllers/UserController.js ───► readOne(req, res) ───► res.status(200).json(user)
```

| Arquivo | Responsabilidade |
|---|---|
| `server.js` | Cria o `app`, registra os middlewares e sobe o servidor na porta 3000 |
| `index.js` | Agrupa todos os routers da aplicação e define o prefixo de cada recurso (`/users`, `/products`) |
| `routes/*Router.js` | Liga cada **verbo HTTP + caminho** a uma função do controller |
| `controllers/*Controller.js` | Contém a regra de negócio: lê `req`, mexe nos dados e responde com `res` |

Para rodar o projeto:

```bash
npm install
npx nodemon server.js
```

Faça o exercício **em cima do projeto da aula** (pasta `aula08`). Trabalhe em uma cópia sua, não altere o repositório da disciplina.

---

## Parte 1 – Entendendo o código (responda em um arquivo `RESPOSTAS.md`)

1. Descreva, passo a passo, o caminho que a requisição `GET /users/2` percorre dentro da aplicação, desde o `server.js` até a resposta chegar ao cliente. Cite o arquivo e a linha (ou trecho) responsável por cada etapa.

2. O que faz a linha `app.use(express.json())`? O que aconteceria com a função `update` do `UserController` se essa linha fosse removida? Teste e explique o resultado.

3. Qual a diferença entre `req.params` e `req.body`? Dê um exemplo de uso de cada um retirado do código da aula.

4. Por que o `create` responde com status `201`, o `readAll` com `200` e o `readOne` com `404` quando não encontra? Qual status seria adequado para uma requisição com dados inválidos (por exemplo, criar um produto sem preço)?

5. Preencha a tabela relacionando as operações do CRUD com o que existe hoje na API da aula:

   | Operação CRUD | Verbo HTTP | Rota de usuários | Rota de produtos |
   |---|---|---|---|
   | Create | | | |
   | Read (todos) | | | |
   | Read (um) | | | |
   | Update | | | |
   | Delete | | | |

6. Por que o controller faz `parseInt(req.params.id)` antes de procurar o usuário? O que acontece se a comparação for feita com `u.id === req.params.id` sem a conversão? Teste e explique.

7. Qual a vantagem de separar `index.js` de `server.js` e de usar `router.use('/users', userRouter)` em vez de escrever todas as rotas diretamente no `app`?

8. Depois de criar, alterar ou apagar usuários, reinicie o servidor (salve qualquer arquivo para o nodemon recarregar) e consulte `GET /users` de novo. O que aconteceu com os dados? Por quê?

---

## Parte 2 – Completando o CRUD de produtos

O `ProductController` da aula ficou incompleto: só tem `create` e `readAll`, e o `create` **não adiciona nada no array**, apenas responde com uma mensagem.

2.1. Corrija o `create` para que ele realmente cadastre o produto:
   - ler `name` e `price` de `req.body`;
   - gerar o `id` automaticamente (maior id existente + 1);
   - inserir o novo produto no array `products`;
   - responder `201` com o **objeto criado** (não apenas a mensagem).

2.2. Adicione validação no `create`: se `name` não for informado ou `price` não for um número maior que zero, responda `400` com uma mensagem explicando o erro.

2.3. Implemente `readOne`, `update` e `remove` no `ProductController`, seguindo o mesmo padrão do `UserController` (inclusive o `404` quando o produto não existe).

2.4. Registre as novas rotas no `routes/ProductRouter.js`:
   - `GET /products/:id`
   - `PUT /products/:id`
   - `DELETE /products/:id`

2.5. O `create` do `UserController` tem o mesmo problema (não insere no array). Corrija-o também, com validação de `name` e `email` obrigatórios.

---

## Parte 3 – Criando um recurso do zero: categorias

Crie um novo recurso **categorias** sem copiar e colar os arquivos existentes: escreva o código do começo.

3.1. Crie `controllers/CategoryController.js` com um array em memória contendo pelo menos duas categorias no formato `{ id, name, description }` e as cinco funções do CRUD (`create`, `readAll`, `readOne`, `update`, `remove`), com validação e `404` onde couber.

3.2. Crie `routes/CategoryRouter.js` ligando os verbos HTTP às funções do controller.

3.3. Registre o router no `index.js` com o prefixo `/categories`.

3.4. Relacione produtos e categorias: adicione o campo `categoryId` nos produtos. Ao criar um produto, verifique se a categoria informada existe; se não existir, responda `400` informando que a categoria é inválida.

3.5. Crie a rota `GET /categories/:id/products`, que retorna somente os produtos daquela categoria (ou `404` se a categoria não existir).

---

## Parte 4 – Testando a API

Use o Thunder Client, Insomnia, Postman ou `curl` e execute as requisições abaixo **na ordem**. Para cada uma, registre o status e o corpo da resposta (print ou texto) no `RESPOSTAS.md`.

| # | Método | Rota | Corpo (JSON) | Status esperado |
|---|---|---|---|---|
| 1 | GET | `/users` | – | 200 – lista com os 3 usuários |
| 2 | GET | `/users/2` | – | 200 – usuário Bob |
| 3 | GET | `/users/99` | – | 404 – usuário não encontrado |
| 4 | POST | `/categories` | `{"name":"Periféricos","description":"Teclados, mouses..."}` | 201 – categoria criada |
| 5 | POST | `/products` | `{"name":"Teclado","price":120,"categoryId":<id da categoria criada>}` | 201 – produto criado com `id` gerado |
| 6 | POST | `/products` | `{"name":"Mouse"}` | 400 – preço obrigatório |
| 7 | POST | `/products` | `{"name":"Mouse","price":50,"categoryId":999}` | 400 – categoria inválida |
| 8 | GET | `/products/2` | – | 200 – produto Teclado |
| 9 | PUT | `/products/2` | `{"price":99.9}` | 200 – produto atualizado |
| 10 | GET | `/categories/<id>/products` | – | 200 – lista contendo o Teclado |
| 11 | DELETE | `/products/2` | – | 200 – produto removido |
| 12 | GET | `/products/2` | – | 404 – produto não encontrado |

Exemplos com `curl` (lembre do cabeçalho `Content-Type` quando enviar corpo):

```bash
curl http://localhost:3000/users
curl http://localhost:3000/users/2
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Teclado","price":120,"categoryId":1}'
curl -X PUT http://localhost:3000/products/2 \
  -H "Content-Type: application/json" \
  -d '{"price":99.9}'
curl -X DELETE http://localhost:3000/products/2
```

---

## Desafios (opcionais, valem ponto extra)

1. **Rota inexistente**: adicione um middleware no final do `server.js` que responda `404` com `{ "message": "Rota não encontrada" }` para qualquer rota que não exista (ex.: `GET /naoexiste`). Explique por que ele precisa ficar **depois** de `app.use('/', index)`.

2. **Filtros por query string**: faça `GET /products?minPrice=10&maxPrice=100` retornar apenas os produtos na faixa de preço e `GET /users?name=ali` retornar os usuários cujo nome contenha o texto informado, ignorando maiúsculas e minúsculas.

3. **Logger**: crie um middleware que imprima no console o método, a URL e a data/hora de toda requisição recebida, e registre-o no `server.js`.

4. **Camada de dados**: mova os arrays `users`, `products` e `categories` para uma pasta `data/` (um arquivo por recurso, exportando o array) e importe-os nos controllers. O que muda na organização do projeto?

---

## Entrega

- Repositório Git (GitHub ou GitLab) contendo a pasta do projeto, **sem** a `node_modules`.
- `README.md` com os comandos para instalar e rodar.
- `RESPOSTAS.md` com as respostas da Parte 1 e as evidências de teste da Parte 4.
- Prazo: conforme combinado em aula.

### Critérios de avaliação (sugestão)

| Item | Peso |
|---|---|
| Parte 1 – questões respondidas com justificativa | 2,0 |
| Parte 2 – CRUD de produtos completo, validado e funcionando | 3,0 |
| Parte 3 – recurso categorias e relação com produtos | 3,0 |
| Parte 4 – evidências de teste de todas as requisições | 2,0 |
| Desafios | até +1,0 extra |
