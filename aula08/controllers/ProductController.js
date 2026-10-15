/* PRODUCT CONTROLLER - CRUD DE PRODUTOS */

// Array para armazenar os produtos
const products = 
[
    { id: 1, name: 'Produto 1', price: 10.0 }
];

// Função para criar um novo produto
const create = (req, res) => {
    res.status(201).json({ message: 'Produto criado com sucesso!' });
}

// função para ler todos os produtos
const readAll = (req, res) => {
    res.status(200).json(products);
}

export default { create, readAll };