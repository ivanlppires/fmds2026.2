import db from '../db/mysql.js'
export const listar = async (req, res) => {
    console.log('entrou na listagem');
    const sql = 'SELECT * FROM alunos';
    try {
        const [rows] = await db.query(sql);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar alunos' });
    }
}
export const buscar = async (req, res) => { }
export const cadastrar = async (req, res) => { }
export const atualizar = async (req, res) => { }
export const remover = async (req, res) => { }