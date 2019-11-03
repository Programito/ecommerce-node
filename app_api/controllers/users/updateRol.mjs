import userDao from '../../models/users/userDao.mjs';
import HTTPerror from 'http-errors';

const updateUserRol = async (req, res, next) =>{
    try {       
        if (!req.body || !req.params.id) {
            next(HTTPerror(400,{message:'Error en la entrada de parámetros'}));
        } else {
            const user = await userDao.updateRole(req.params.id,req.body.role);
            res.json(user);
        }
    } catch (error) {
        next(error);
    }
}

export default updateUserRol;