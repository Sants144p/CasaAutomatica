import pool from '../database';

export interface Usuario {
  id?: number;
  nome: string;
  senha: string;
}

export async function getAllUsuarios(): Promise<Usuario[]> {
  const [rows] = await pool.execute('SELECT * FROM usuarios');
  return rows as Usuario[];
}

export async function getUsuarioById(id: number): Promise<Usuario | null> {
  const [rows] = await pool.execute('SELECT * FROM usuarios WHERE id = ?', [id]);
  const usuarios = rows as Usuario[];
  return usuarios.length > 0 ? usuarios[0] : null;
}

export async function createUsuario(usuario: Usuario): Promise<number> {
  const { nome, senha} = usuario;
  const [result]: any = await pool.execute(
    'INSERT INTO usuarios (nome, senha) VALUES (?, ?)',
    [nome, senha]
  );
  return result.insertId;
}

export async function updateUsuario(usuario: Usuario): Promise<boolean> {
  if (!usuario.id) return false;
  const { id, nome, senha} = usuario;
  const [result]: any = await pool.execute(
    'UPDATE usuarios SET nome = ?, senha = ? WHERE id = ?',
    [nome, senha, id]
  );
  return result.affectedRows > 0;
}

export async function deleteUsuario(id: number): Promise<boolean> {
  const [result]: any = await pool.execute('DELETE FROM usuarios WHERE id = ?', [id]);
  return result.affectedRows > 0;
}