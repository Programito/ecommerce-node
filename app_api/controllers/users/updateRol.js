import userDao from '../../models/users/userDao.js';
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
        next(HTTPerror(error.code, {message:error.message}));
    }
}

export default updateUserRol;