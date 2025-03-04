import { getUsuarioById, getAllUsuarios } from "../src/Model/usuarioModel";

jest.mock("../src/Model/usuarioModel", () => ({
  getUsuarioById: jest.fn(),
  getAllUsuarios: jest.fn()
}));

describe("Testes do usuarioModel", () => {
  
  test("Deve retornar um usuário pelo ID", async () => {
    (getUsuarioById as jest.Mock).mockResolvedValue({ id: 1, nome: "leitoa" });

    const usuario = await getUsuarioById(1);
    expect(usuario).toEqual({ id: 1, nome: "leitoa" });
  });

  test("Deve retornar todos os usuários do banco", async () => {
    const usuariosMock = [
      { id: 1, nome: "leitoa" },
      { id: 2, nome: "robertinho" },
      { id: 3, nome: "leozinho" }];

    (getAllUsuarios as jest.Mock).mockResolvedValue(usuariosMock);

    const usuarios = await getAllUsuarios();
    expect(usuarios).toEqual(usuariosMock);
  });
  
});
