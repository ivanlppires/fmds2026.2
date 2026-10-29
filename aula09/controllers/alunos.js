import db from '../db/mysql.js'

const listar = async (req, res) => {  
    try{
        const [rows] = await db.query('select * from alunos');
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar alunos' });
    }
}

const buscar = (req, resp) => {
}

const cadastrar = (req, resp) => {
}

const atualizar = (req, resp) => {
}

const remover = (req, resp) => {
}

export { listar, buscar, cadastrar, atualizar, remover }