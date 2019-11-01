import Router from 'express';
import login from '../controllers/auth/login.mjs';
import register from '../controllers/auth/register.mjs';

const router = Router();

router.post('/login', login);
router.post('/register',register);

export default router;