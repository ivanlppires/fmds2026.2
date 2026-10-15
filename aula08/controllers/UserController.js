const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];

const create = (req, res) => {
  res.status(201).json({ message: 'Usuário criado com sucesso!' });
};

const readAll = (req, res) => {
  res.status(200).json(users);
};

const readOne = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (user)
    res.status(200).json(user);
  else
    res.status(404).json({ message: 'Usuário não encontrado' });
};

const update = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex !== -1) {
    const newData = req.body;
    users[userIndex] = { ...users[userIndex], ...newData };
    res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } else {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }
};

const remove = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(200).json({ message: 'Usuário deletado com sucesso!' });
  } else {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }
};

export default { create, readAll, readOne, update, remove }; 