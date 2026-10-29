import db from '../db/mysql.js'

const listar = async (req, res) => {
    try {
        const [rows] = await db.query('select * from alunos');
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar alunos' });
    }
}

const buscar = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await db.query('select * from alunos where id=' + id);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar alunos' });
    }
}

const cadastrar = (req, res) => {
    const { nome, email } = req.body;
    const sql = `insert into alunos (nome, email) values ('${nome}', '${email}')`;
    try {
        db.query(sql);
        res.status(201).json({ message: 'Aluno cadastrado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao cadastrar aluno' });
    }
}

const atualizar = (req, res) => {
    const { nome, email } = req.body;
    const id = req.params.id;
    const sql = `update alunos set nome = '${nome}', email = '${email}' where id = ${id}`;
    try {
        db.query(sql);
        res.status(200).json({ message: 'Aluno atualizado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao cadastrar aluno' });
    }
}

const remover = (req, res) => {
    const id = req.params.id;
    const sql = `delete from alunos where id = ${id}`;
    try {
        db.query(sql);
        res.status(200).json({ message: 'Aluno removido com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao remover aluno' });
    }
}

export { listar, buscar, cadastrar, atualizar, remover }