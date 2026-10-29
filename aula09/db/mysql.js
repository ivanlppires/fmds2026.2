import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'meuusuario',
  password: 'minhasenha',
  database: 'fds20262',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;