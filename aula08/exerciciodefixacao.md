# Exercício de Fixação – Aula 08

## API de Biblioteca com Express (rotas + controllers + CRUD em memória)

Reproduza **do zero** a estrutura que montamos em aula (`server.js` → `index.js` → `routes/` → `controllers/`), agora com o tema **biblioteca**: dois recursos, **autores** e **livros**, cada um com CRUD completo.

Regras:

- Crie um projeto novo. **Não** copie a pasta `aula08` e troque os nomes. Use o código da aula como referência, mas digite o seu.
- Ao final, a API precisa estar **rodando** e respondendo a **todas** as requisições da tabela de testes do Passo 7.

---

## Passo 1 – Criar o projeto

```bash
mkdir biblioteca-api
cd biblioteca-api
npm init -y
npm install express nodemon
```

No `package.json`, adicione `"type": "module"` (para usar `import`/`export`) e o script `dev`:

```json
{
  "type": "module",
  "scripts": {
    "dev": "nodemon server.js"
  }
}
```

---

## Passo 2 – Estrutura de pastas

Crie exatamente esta estrutura:

```
biblioteca-api/
├── package.json
├── server.js
├── index.js
├── routes/
│   ├── AuthorRouter.js
│   └── BookRouter.js
└── controllers/
    ├── AuthorController.js
    └── BookController.js
```

---

## Passo 3 – `server.js`

Igual ao da aula:

1. importar o `express` e o `index.js`;
2. criar o `app`;
3. registrar o middleware `express.json()`;
4. registrar as rotas com `app.use('/', index)`;
5. subir o servidor na porta `3000` (se a porta estiver ocupada pelo projeto da aula, use `3001`) e imprimir uma mensagem no console.

---

## Passo 4 – `index.js`

Criar um `express.Router()`, importar os dois routers e registrá-los com os prefixos:

| Prefixo | Router |
|---|---|
| `/authors` | `AuthorRouter.js` |
| `/books` | `BookRouter.js` |

Exportar o router como `default`.

---

## Passo 5 – Autores (`AuthorController.js` + `AuthorRouter.js`)

**Dados iniciais** (array em memória no controller):

```js
const authors = [
  { id: 1, name: 'Machado de Assis', nationality: 'Brasileira' },
  { id: 2, name: 'Jorge Amado',      nationality: 'Brasileira' },
  { id: 3, name: 'J. K. Rowling',    nationality: 'Britânica' }
];
```

**Funções do controller** (mesmo padrão do `UserController` da aula):

| Função | O que faz | Resposta |
|---|---|---|
| `create` | lê `name` e `nationality` de `req.body`, gera o `id` (maior id + 1) e **insere no array** | `201` com o autor criado |
| `readAll` | retorna todos os autores | `200` com o array |
| `readOne` | procura pelo `id` de `req.params` (lembre do `parseInt`) | `200` com o autor ou `404` com `{ message: 'Autor não encontrado' }` |
| `update` | mescla `req.body` no autor encontrado | `200` com mensagem de sucesso ou `404` |
| `remove` | remove o autor do array (`splice`) | `200` com mensagem de sucesso ou `404` |

Exportar `{ create, readAll, readOne, update, remove }` como `default`.

**Rotas** no `AuthorRouter.js`:

| Verbo | Caminho | Função |
|---|---|---|
| POST | `/` | `create` |
| GET | `/` | `readAll` |
| GET | `/:id` | `readOne` |
| PUT | `/:id` | `update` |
| DELETE | `/:id` | `remove` |

---

## Passo 6 – Livros (`BookController.js` + `BookRouter.js`)

**Dados iniciais**:

```js
const books = [
  { id: 1, title: 'Memórias Póstumas de Brás Cubas',  year: 1881, authorId: 1, available: true },
  { id: 2, title: 'Capitães da Areia',                year: 1937, authorId: 2, available: true },
  { id: 3, title: 'Harry Potter e a Pedra Filosofal', year: 1997, authorId: 3, available: true }
];
```

Implemente as **mesmas cinco funções** do Passo 5 para livros (`create` lê `title`, `year` e `authorId` do corpo e cria o livro com `available: true`; mensagem de `404`: `'Livro não encontrado'`) e as **mesmas cinco rotas** no `BookRouter.js`.

---

## Passo 7 – Rodar e testar

Suba o servidor:

```bash
npm run dev
```

Execute as requisições abaixo **nesta ordem** (Thunder Client, Insomnia, Postman ou `curl`) e confira o resultado:

| # | Método | Rota | Corpo (JSON) | Resultado esperado |
|---|---|---|---|---|
| 1 | GET | `/authors` | – | `200`, lista com 3 autores |
| 2 | GET | `/authors/2` | – | `200`, Jorge Amado |
| 3 | GET | `/authors/99` | – | `404`, `Autor não encontrado` |
| 4 | POST | `/authors` | `{"name":"Clarice Lispector","nationality":"Brasileira"}` | `201`, autora criada com `id: 4` |
| 5 | PUT | `/authors/4` | `{"nationality":"Ucraniana-brasileira"}` | `200`, mensagem de sucesso |
| 6 | GET | `/authors/4` | – | `200`, nacionalidade alterada |
| 7 | DELETE | `/authors/4` | – | `200`, mensagem de sucesso |
| 8 | GET | `/authors/4` | – | `404`, `Autor não encontrado` |
| 9 | GET | `/books` | – | `200`, lista com 3 livros |
| 10 | POST | `/books` | `{"title":"Dom Casmurro","year":1899,"authorId":1}` | `201`, livro criado com `id: 4` e `available: true` |
| 11 | GET | `/books/4` | – | `200`, Dom Casmurro |
| 12 | PUT | `/books/4` | `{"available":false}` | `200`, mensagem de sucesso |
| 13 | GET | `/books/4` | – | `200`, `available: false` |
| 14 | DELETE | `/books/4` | – | `200`, mensagem de sucesso |
| 15 | GET | `/books/4` | – | `404`, `Livro não encontrado` |

Exemplos com `curl` (ao enviar corpo, não esqueça o cabeçalho `Content-Type`):

```bash
curl http://localhost:3000/authors
curl http://localhost:3000/authors/2
curl -X POST http://localhost:3000/authors \
  -H "Content-Type: application/json" \
  -d '{"name":"Clarice Lispector","nationality":"Brasileira"}'
curl -X PUT http://localhost:3000/books/4 \
  -H "Content-Type: application/json" \
  -d '{"available":false}'
curl -X DELETE http://localhost:3000/books/4
```

---

## Entrega

Checklist antes de entregar:

- [ ] `npm run dev` sobe o servidor sem erro
- [ ] estrutura de pastas igual à do Passo 2
- [ ] as 15 requisições do Passo 7 respondem com o resultado esperado
- [ ] `.gitignore` com `node_modules`

Enviar o link do repositório (GitHub ou GitLab) com o projeto. Prazo: conforme combinado em aula.
