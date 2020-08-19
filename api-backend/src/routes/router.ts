import express from 'express';
import Funcionario_API from './funcionario_api/funcionario_api';
const router = express.Router();

router.use('/funcionario_api', Funcionario_API);

export default router;