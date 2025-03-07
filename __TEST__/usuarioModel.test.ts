
import pool from '../src/database';
import { getAllUsuarios, getUsuarioById } from '../src/Model/usuarioModel'; // Ajuste o caminho conforme necessário

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