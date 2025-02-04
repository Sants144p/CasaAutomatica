import pool from './database.js';

export async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conectado ao banco de dados com sucesso!');
    connection.release();
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco:', error);
  }
}
