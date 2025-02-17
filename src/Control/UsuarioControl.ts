import { Request, Response } from "express";
import * as UsuarioModel from "../Model/usuarioModel.js"; // Necessário '.js' em ES Modules

export async function listUsuarios(req: Request, res: Response) {
  try {
    const usuarios = await UsuarioModel.getAllUsuarios();
    res.json(usuarios);
  } catch (err) {
    console.error("Erro ao listar usuários:", err);
    res.status(500).send(JSON.stringify(err));
  }
}

export async function showCreateForm(req: Request, res: Response) {
  res.json({ action: "/usuarios/create", usuario: {} });
}

export async function createUsuario(req: Request, res: Response) {
  try {
    const { nome, senha } = req.body;
    await UsuarioModel.createUsuario({ nome, senha });
    res.redirect("/usuarios");
  } catch (err) {
    console.error("Erro ao criar usuário:", err);
    res.status(500).send(JSON.stringify(err));
  }
}

export async function showEditForm(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const usuario = await UsuarioModel.getUsuarioById(id);
    if (!usuario) {
      return res.status(404).send("Usuário não encontrado");
    }
    res.json({ action: `/usuarios/edit/${id}`, usuario });
  } catch (err) {
    console.error("Erro ao buscar usuário:", err);
    res.status(500).send(JSON.stringify(err));
  }
}

export async function updateUsuario(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const { nome, senha } = req.body;
    await UsuarioModel.updateUsuario({ id, nome, senha });
    res.redirect("/usuarios");
  } catch (err) {
    console.error("Erro ao atualizar usuário:", err);
    res.status(500).send(JSON.stringify(err));
  }
}

export async function deleteUsuario(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await UsuarioModel.deleteUsuario(id);
    res.redirect("/usuarios");
  } catch (err) {
    console.error("Erro ao excluir usuário:", err);
    res.status(500).send(JSON.stringify(err));
  }
}
