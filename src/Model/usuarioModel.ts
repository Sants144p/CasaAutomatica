import pool from "../database.js";

export interface Usuario {
  id?: number;
  nome: string;
  senha: string;
}

export async function getAllUsuarios(): Promise<Usuario[]> {
  try {
    const [rows] = await pool.execute("SELECT * FROM usuarios");
    return rows as Usuario[];
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
}

export async function getUsuarioById(id: number): Promise<Usuario | null> {
  try {
    const [rows] = await pool.execute("SELECT * FROM usuarios WHERE id = ?", [id]);
    const usuarios = rows as Usuario[];
    return usuarios.length > 0 ? usuarios[0] : null;
  } catch (error) {
    console.error("Erro ao buscar usuário por ID:", error);
    throw error;
  }
}

export async function createUsuario(usuario: Usuario): Promise<number> {
  try {
    const { nome, senha } = usuario;
    const [result]: any = await pool.execute(
      "INSERT INTO usuarios (nome, senha) VALUES (?, ?)",
      [nome, senha]
    );
    return result.insertId;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
}

export async function updateUsuario(usuario: Usuario): Promise<boolean> {
  try {
    if (!usuario.id) return false;
    const { id, nome, senha } = usuario;
    const [result]: any = await pool.execute(
      "UPDATE usuarios SET nome = ?, senha = ? WHERE id = ?",
      [nome, senha, id]
    );
    return result.affectedRows > 0;
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    throw error;
  }
}

export async function deleteUsuario(id: number): Promise<boolean> {
  try {
    const [result]: any = await pool.execute("DELETE FROM usuarios WHERE id = ?", [id]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
    throw error;
  }
}
