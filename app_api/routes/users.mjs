import Router from 'express';
import findAllUsers from '../controllers/users/findAllUsers.mjs';
import findOneUser from '../controllers/users/findOneUser.mjs';
import updateUser from '../controllers/users/updateUser.mjs';
import deleteUser from '../controllers/users/deleteUser.mjs';
import updateRol from '../controllers/users/updateRol.mjs';
import findUserPaginator from '../controllers/users/findUserPaginator.mjs';


const router = Router();

router.get('/', findAllUsers);

router.get('/:id', findOneUser);

router.get('/:page/:numElem',findUserPaginator );

router.put('/:id', updateUser);

router.put('/role/:id', updateRol);

router.delete('/:id', deleteUser);

export default router;