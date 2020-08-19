import express from 'express';
import findCredentials from '../../utils/credentials/findCredentials';
import FuncionarioControllers from '../../controllers/funcionario_api/FuncionarioControllers'
const funcionarioControllers = new FuncionarioControllers();
const router = express.Router();

router.post('/users', funcionarioControllers.index);
router.post('/register', funcionarioControllers.create);
router.post('/login', funcionarioControllers.login);
export default router;