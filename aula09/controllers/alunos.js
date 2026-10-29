import db from '../db/mysql.js'

const listar = async (req, res) => {  
    const [rows] = await db.query('select * from alunos');
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