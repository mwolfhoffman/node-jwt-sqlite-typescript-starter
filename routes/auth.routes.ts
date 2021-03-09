import { login } from '../controllers/auth.controller';
import * as express from 'express';
const router = express.Router()

router.post('/login', login)

export default router