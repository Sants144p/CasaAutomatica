import { Router } from 'express';
import * as usuarioController from '../Control/UsuarioControl';

const router = Router();

// Rotas de Usuários
router.get('/', usuarioController.listUsuarios);
router.get('/usuarios', usuarioController.listUsuarios);
router.get('/usuarios/create', usuarioController.showCreateForm);
router.post('/usuarios/create', usuarioController.createUsuario);
router.get('/usuarios/edit/:id', usuarioController.showEditForm);
router.post('/usuarios/edit/:id', usuarioController.updateUsuario);
router.get('/usuarios/delete/:id', usuarioController.deleteUsuario);

export default router;