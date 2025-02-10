import * as mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conectado ao banco de dados com sucesso!');
    connection.release();
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco:', error);
  }
}
testConnection()

export default pool;
