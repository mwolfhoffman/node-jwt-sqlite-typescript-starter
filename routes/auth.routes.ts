import { login, signup } from '../controllers/auth.controller';
import * as express from 'express';
const router = express.Router()

router.post('/login', login);
router.post('/signup', signup);

export default router