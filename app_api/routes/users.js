import Router from 'express';
import findAllUsers from '../controllers/users/findAllUsers.js';
import findOneUser from '../controllers/users/findOneUser.js';
import updateUser from '../controllers/users/updateUser.js';
import deleteUser from '../controllers/users/deleteUser.js';
import updateRol from '../controllers/users/updateRol.js';
import findUserPaginator from '../controllers/users/findUserPaginator.js';
import findRegex from '../controllers/users/findRegex.js';


const router = Router();

router.get('/', findAllUsers);

router.get('/:id', findOneUser);

router.get('/:page/:numElem',findUserPaginator );

router.get('/buscar/regex/:busqueda',findRegex);

router.put('/:id', updateUser);

router.put('/role/:id', updateRol);

router.delete('/:id', deleteUser);

export default router;