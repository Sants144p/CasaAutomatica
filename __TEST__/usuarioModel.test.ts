
import pool from '../src/database';
import { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario } from '../src/Model/usuarioModel'; // Ajuste o caminho conforme necessário

// Mock do pool.execute
jest.mock('../src/database', () => ({
  execute: jest.fn(),
}));

describe('getAllUsuarios', () => {
  it('deve retornar uma lista de usuários', async () => {
    // Mock dos dados que seriam retornados pelo banco de dados
    const mockUsuarios = [
      { id: 1, nome: 'Usuário 1', senha: 'senha1' },
      { id: 2, nome: 'Usuário 2', senha: 'senha2' },
    ];

    // Configura o mock para retornar os dados simulados
    (pool.execute as jest.Mock).mockResolvedValueOnce([mockUsuarios]);

    // Chama a função que queremos testar
    const usuarios = await getAllUsuarios();

    // Verifica se o resultado é o esperado
    expect(usuarios).toEqual(mockUsuarios);

    // Verifica se o pool.execute foi chamado corretamente
    expect(pool.execute).toHaveBeenCalledWith('SELECT * FROM usuarios');
  });

  it('deve lançar um erro se a consulta falhar', async () => {
    // Configura o mock para lançar um erro
    (pool.execute as jest.Mock).mockRejectedValueOnce(new Error('Erro ao buscar usuários'));

    // Verifica se a função lança o erro esperado
    await expect(getAllUsuarios()).rejects.toThrow('Erro ao buscar usuários');

    // Verifica se o pool.execute foi chamado corretamente
    expect(pool.execute).toHaveBeenCalledWith('SELECT * FROM usuarios');
  });

});

describe('getUsuarioById', () => {
  it('deve retornar um usuario por ID', async () => {
    const mockUsuarios = [{ id: 1, nome: "michael guy", senha: "7minutoz"},
                          { id: 2, nome: 'Usuário 2', senha: 'senha2' }];
    (pool.execute as jest.Mock).mockResolvedValueOnce([mockUsuarios]);
    const usuarios = await getUsuarioById(1);

    // Verifica se o resultado é o esperado
    expect(usuarios).toEqual(mockUsuarios[0]);

    // Verifica se o pool.execute foi chamado corretamente
    expect(pool.execute).toHaveBeenCalledWith("SELECT * FROM usuarios WHERE id = ?", [1]);
  })
  it('deve lançar um erro se a consulta falhar', async () => {
    // Configura o mock para lançar um erro
    (pool.execute as jest.Mock).mockRejectedValueOnce(new Error('Erro ao buscar usuários'));

    // Verifica se a função lança o erro esperado
    await expect(getUsuarioById).rejects.toThrow('Erro ao buscar usuários');

    // Verifica se o pool.execute foi chamado corretamente
    expect(pool.execute).toHaveBeenCalledWith("SELECT * FROM usuarios WHERE id = ?", [1]);
  });

})

describe('createUsuario', () => {
  it('deve criar um novo usuário', async () => {
    const mockUsuario = { id: 1, nome: 'leitoa', senha: 'shark' };
    (pool.execute as jest.Mock).mockResolvedValueOnce([{ insertId: 1 }]);

    const id = await createUsuario(mockUsuario);

    expect(id).toBe(1);
    expect(pool.execute).toHaveBeenCalledWith(
      'INSERT INTO usuarios (nome, senha) VALUES (?, ?)',
      ['leitoa', 'shark']
    );
  });

  it('deve lançar um erro se a criação falhar', async () => {
    const mockUsuario = { nome: 'leitoa', senha: 'shark' };
    (pool.execute as jest.Mock).mockRejectedValueOnce(new Error('Erro ao criar usuário'));

    await expect(createUsuario(mockUsuario)).rejects.toThrow('Erro ao criar usuário');

    expect(pool.execute).toHaveBeenCalledWith(
      'INSERT INTO usuarios (nome, senha) VALUES (?, ?)',
      ['leitoa', 'shark']
    );
  });
});

describe('updateUsuario', () => {
  it('deve atualizar um usuário', async () => {
    const mockUsuario = { id: 1, nome: 'leitoa', senha: 'shark' };
    (pool.execute as jest.Mock).mockResolvedValueOnce([{ affectedRows: 1 }]);

    const result = await updateUsuario(mockUsuario);

    expect(result).toBe(true);
    expect(pool.execute).toHaveBeenCalledWith(
      'UPDATE usuarios SET nome = ?, senha = ? WHERE id = ?',
      ['leitoa', 'shark', 1]
    );
  });

  it('deve lançar um erro se a atualização falhar', async () => {
    const mockUsuario = { id: 1, nome: 'leitoa', senha: 'shark' };
    (pool.execute as jest.Mock).mockRejectedValueOnce(new Error('Erro ao atualizar usuário'));

    await expect(updateUsuario(mockUsuario)).rejects.toThrow('Erro ao atualizar usuário');

    expect(pool.execute).toHaveBeenCalledWith(
      'UPDATE usuarios SET nome = ?, senha = ? WHERE id = ?',
      ['leitoa', 'shark', 1]
    );
  });
});

describe('deleteUsuario', () => {
  it('deve deletar um usuário', async () => {
    (pool.execute as jest.Mock).mockResolvedValueOnce([{ affectedRows: 1 }]);

    const result = await deleteUsuario(1);

    expect(result).toBe(true);
    expect(pool.execute).toHaveBeenCalledWith('DELETE FROM usuarios WHERE id = ?', [1]);
  });

  it('deve lançar um erro se a deleção falhar', async () => {
    (pool.execute as jest.Mock).mockRejectedValueOnce(new Error('Erro ao deletar usuário'));

    await expect(deleteUsuario(1)).rejects.toThrow('Erro ao deletar usuário');

    expect(pool.execute).toHaveBeenCalledWith('DELETE FROM usuarios WHERE id = ?', [1]);
  });
});