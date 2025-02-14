import { Router } from "express";
import * as usuarioController from "../Control/UsuarioControl.js";

const router = Router();

// Rotas de Usuários
router.get("/", (req, res) => {usuarioController.listUsuarios(req, res)});
router.get("/usuarios", (req, res) => {usuarioController.listUsuarios(req, res)});
router.get("/usuarios/create", (req, res) => {usuarioController.showCreateForm(req, res)});
router.post("/usuarios/createuser", (req, res) => {usuarioController.createUsuario(req, res)});
router.get("/usuarios/edit/:id", (req, res) => {usuarioController.showEditForm(req, res)});
router.post("/usuarios/edit/:id", (req, res) => {usuarioController.updateUsuario(req, res)});
router.get("/usuarios/delete/:id", (req , res) => {usuarioController.deleteUsuario(req, res)});

export default router;
