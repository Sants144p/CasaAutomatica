import { getUsuarioById } from "../src/Model/usuarioModel"; 

jest.mock("../src/Model/usuarioModel", () => ({
  getUsuarioById: jest.fn()
}));

test("Deve retornar um usuário do banco", async () => {
  (getUsuarioById as jest.Mock).mockResolvedValue({ id: 1, nome: "leitoa" });

  const usuario = await getUsuarioById(1);
  expect(usuario).toEqual({ id: 1, nome: "leitoa" });
});
